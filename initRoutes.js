const logger = require('./utils/logger');
const fs = require('fs');

module.exports = (app) => {
  logger.info("Adding Routes");

  fs.readdirSync('./routes')
    .map(filename => require(`./routes/${filename}`)(app));

  logger.info("Routes Initialized");
}