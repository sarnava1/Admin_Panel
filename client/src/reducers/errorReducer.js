//importing the dependancies
import { GET_ERRORS } from '../actions/types';

//the initial state for the error reducer
const initialState = {};

export default function(state = initialState, action) {
    //based on the action type our action will selected
    switch (action.type) {
        case GET_ERRORS:
          return action.payload;
        default:
          return state;
    }
}