//requiring the various dependancies
const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const app=express();

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Making our port equal to 5000 or assigning it to the dynamic port which will be provided by heroku
const port = process.env.PORT || 5000;

//Starting the server by making it listen to our port
app.listen(port, () => console.log(`server running on port ${port}`));
