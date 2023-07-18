//const chalk = require('chalk');
const validator = require("validator");
//import chalk from 'chalk';
//console.log(chalk.backgroundColorNames);

const resp= validator.isEmail("rohit@gmail.com");
console.log(resp);
