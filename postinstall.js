const dotenvFlow = require('dotenv-flow');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Use .env from main directory
const env = dotenvFlow.parse(
    dotenvFlow.listFiles({
        path: process.env.INIT_CWD,
    })

);

if (!env.FLOTIQ_API_KEY && !process.env.FLOTIQ_API_KEY) {
    throw new Error(`Environment variable FLOTIQ_API_KEY not found in ${process.env.INIT_CWD} (.env files) or in system environment variables.`);
}

// Execute the flotiq-codegen-ts process.
// It can be simplified when the codegen is available as a function or when the key becomes a parameter
const codegen = spawn('npx', ['git@github.com:flotiq/flotiq-codegen-ts.git#support-cjs-mjs', '--compiled-js']);

let typedEnv = false;
let typedKey = false
codegen.stdout.on('data', (data) => {
    const output = data.toString();
    console.log(output);

    if (!typedEnv && output.includes('Do you want to use API key')) {
        codegen.stdin.write('n\n');
        typedEnv = true;
    }

    if (!typedKey && output.includes('Please enter your Flotiq')) {
        codegen.stdin.write(env.FLOTIQ_API_KEY || process.env.FLOTIQ_API_KEY);
        codegen.stdin.write('\n');
        typedKey = true;
    }
});

codegen.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
});

codegen.on('close', (code) => {
    const timestamp = new Date().toISOString();
    const filePath = path.join(__dirname, 'sdk.log');
    fs.appendFile(filePath, `Generated SDK on postinstall: ${timestamp}\n`, () => {});
});