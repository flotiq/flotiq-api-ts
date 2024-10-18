const path = require('path');
require('dotenv').config();

if(!process.env.FLOTIQ_API_KEY) {
    throw new Error('Missing FLOTIQ_API_KEY environment variable');
}