//this validation file is used to validate all the input fields of the registration
//page.

//including the dependancies which are required
const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  //initialising the errors object
  let errors = {};

  //setting the input fields either to the netered value or setting it to ''
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  //the various validations are now defined here
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }
 
  //returning the errors and the isValid boolean
  return {
    errors,
    isValid: isEmpty(errors)
  };
};