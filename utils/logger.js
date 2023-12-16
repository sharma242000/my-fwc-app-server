const chalk = require('chalk');
const log = console.log;

const info = (message) => {
    var logMessage = `[${new Date().toISOString()}] : INFO : ${message}`;
    log(chalk.blue(logMessage));
}

const warning = (message) => {
    var logMessage = `[${new Date().toISOString()}] : WARNING : ${message}`;
    log(chalk.yellow(logMessage));
}

const error = (message) => {
    var logMessage = `[${new Date().toISOString()}] : ERROR : ${message}`;
    log(chalk.red(logMessage));
}

module.exports = {
    info,
    warning,
    error
}