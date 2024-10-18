const path = require('path');
require('dotenv').config();


const { exec, spawn } = require('child_process');

throw new Error(process.cwd());

console.log('Zmienna FLOTIQ_API_KEY:', process.env.FLOTIQ_API_KEY);


const codegen = spawn('npx', ['git@github.com:flotiq/flotiq-codegen-ts.git#support-cjs-mjs', '--compiled-js']);

let answerSent = false;

codegen.stdout.on('data', (data) => {
    const output = data.toString(); // Konwersja bufora na string

    console.log(output);

    // Sprawdzamy, czy dane wyjściowe zawierają pytanie, na które chcemy odpowiedzieć
    if (!answerSent && output.includes('Do you want to use API key')) {
        codegen.stdin.write('n\n'); // Przesyłamy odpowiedź
        answerSent = true;
    }

    // Sprawdzamy, czy dane wyjściowe zawierają pytanie, na które chcemy odpowiedzieć
    if (output.includes('Please enter your Flotiq')) {
        codegen.stdin.write(process.env.FLOTIQ_API_KEY); // Przesyłamy odpowiedź
        codegen.stdin.write('\n');
    }

});

// Obsługa błędów (stderr)
codegen.stderr.on('data', (data) => {
    console.error(`Błąd: ${data}`);
});

// Obsługa zakończenia procesu
codegen.on('close', (code) => {
    console.log(`Proces zakończył się z kodem: ${code}`);
});

//
// exec(`echo ' | npx  flotiq-codegen-ts generate`, (error, stdout, stderr) => {
//     if (error) {
//         console.error(`Błąd przy uruchamianiu komendy: ${error}`);
//         return;
//     }
//     if (stderr) {
//         console.error(`Błąd: ${stderr}`);
//         return;
//     }
//     console.log(`Wynik komendy: ${stdout}`);
// });


// fetch('https://webhook.site/c3e03eaf-fe66-4006-a270-1aa642a6052a', {
//     method: 'POST',
//     body: JSON.stringify({key: process.env.FLOTIQ_API_KEY || 'no key provided', z: 12})
// })