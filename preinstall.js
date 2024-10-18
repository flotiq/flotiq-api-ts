const path = require('path');
require('dotenv').config(); // pass path to parent env file


// __dirname // is /home/michal/.npm/_cacache/tmp/git-clonePV5SzE
// process.cwd() // /home/michal/.npm/_cacache/tmp/git-cloneGqWGpZ

if(!process.env.FLOTIQ_API_KEY) {
    throw new Error('Missing FLOTIQ_API_KEY environment variable');
}