const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env') });


if(!process.env.FLOTIQ_API_KEY) {
    throw new Error('Missing FLOTIQ_API_KEY environment variable');
}