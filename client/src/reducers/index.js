//this combines all our reducers which we will define

import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
   auth: authReducer
});
