const path = require('path');
require('dotenv').config({path: path.resolve(process.env.INIT_CWD, '.env')});

if (!process.env.FLOTIQ_API_KEY) {
    throw new Error(`Env FLOTIQ_API_KEY not found in  ${process.env.INIT_CWD}`);
}