const fs = require('fs');
const path = require('path');

const timestamp = new Date().toISOString();
const filePath = path.join(__dirname, 'sdk.log');

// Write the timestamp to the file
fs.writeFile(filePath, `Prepare to generate SDK on preinstall: ${timestamp}\n`, () => {});
