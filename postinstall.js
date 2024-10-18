const path = require('path');
const { spawn } = require('child_process');

// Use .env from main directory
require('dotenv').config({path: path.resolve(process.env.INIT_CWD, '.env')});

if (!process.env.FLOTIQ_API_KEY) {
    throw new Error(`Env not found in  ${process.env.INIT_CWD}`);
}

// Execute the flotiq-codegen-ts process.
// It can be simplified when the codegen is available as a function or when the key becomes a parameter
const codegen = spawn('npx', ['git@github.com:flotiq/flotiq-codegen-ts.git#support-cjs-mjs', '--compiled-js']);

let answerSent = false;
codegen.stdout.on('data', (data) => {
    const output = data.toString();
    console.log(output);

    if (!answerSent && output.includes('Do you want to use API key')) {
        codegen.stdin.write('n\n'); // Przesyłamy odpowiedź
        answerSent = true;
    }

    if (output.includes('Please enter your Flotiq')) {
        codegen.stdin.write(process.env.FLOTIQ_API_KEY);
        codegen.stdin.write('\n');
    }
});

codegen.stderr.on('data', (data) => {
    console.error(`Błąd: ${data}`);
});

codegen.on('close', (code) => {
    console.log(`Proces zakończył się z kodem: ${code}`);
});