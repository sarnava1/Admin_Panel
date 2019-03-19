//requiring the various dependancies
const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const app=express();

//requiring the routes
const users = require('./routes/api/users');


//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

//connect to mongoDB
mongoose
   .connect(db)
   .then( () => console.log('MongoDB Connected'))
   .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Use routes
app.use('/api/users', users);

//serve static assets if we are in production
if(process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//Making our port equal to 5000 or assigning it to the dynamic port which will be provided by heroku
const port = process.env.PORT || 5000;

//Starting the server by making it listen to our port
app.listen(port, () => console.log(`server running on port ${port}`));
