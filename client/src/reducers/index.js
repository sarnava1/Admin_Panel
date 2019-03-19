//this combines all our reducers which we will define

//importing the dependancies
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
   auth: authReducer,
   errors: errorReducer
});
