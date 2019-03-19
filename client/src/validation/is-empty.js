//this is used to check whether any input field is empty or not, that input field can be 
//object, string or of any other type
const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

export default isEmpty;
