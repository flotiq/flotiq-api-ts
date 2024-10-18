require('dotenv').config({path: './../../.env'});

if(!process.env.FLOTIQ_API_KEY) {
    throw new Error('Missing FLOTIQ_API_KEY environment variable');
}