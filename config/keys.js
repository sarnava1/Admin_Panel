//depending on the environment our keys will be fetched for the mlab db
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod');
  } else {
    module.exports = require('./keys_dev');
  }