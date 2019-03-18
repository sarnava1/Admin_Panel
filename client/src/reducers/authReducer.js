//importing the dependancies
import { TEST_DISPATCH } from '../actions/types'; 

//the initial state for the auth reducer
const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialState, action) {
    //based on the action type our action will selected
    switch (action.type) {
        case TEST_DISPATCH:
          return {
              ...state,
              user: action.payload
          }
        default:
          return state;
    }
}