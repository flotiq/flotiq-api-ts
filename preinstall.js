const dotenvFlow = require('dotenv-flow');

const env = dotenvFlow.parse(
    dotenvFlow.listFiles({
        path: process.env.INIT_CWD,
    })
);

if (!env.FLOTIQ_API_KEY) {
    throw new Error(`Env FLOTIQ_API_KEY not found in  ${process.env.INIT_CWD}`);
}