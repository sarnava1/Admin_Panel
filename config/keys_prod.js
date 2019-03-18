//these keys will be used when the app will be in production and these are actually
//environment variables which will be fetched from heroku
module.exports = {
    mongoURI: process.env.MONGO_URI,
    secretOrKey: process.env.SECRET_OR_KEY
  };