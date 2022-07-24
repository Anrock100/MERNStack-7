// Write on ini file

//Read ini file
const fs = require('fs');
const ini = require('ini');
const config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));
console.log(config);

//Write on ini file
//Update on ini file
//section
//key:value



