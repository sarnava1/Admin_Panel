//importing the dependancies
import { SET_CURRENT_USER } from '../actions/types';

import isEmpty from '../validation/is-empty';

//the initial state for the auth reducer
const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialState, action) {
    //based on the action type our action will selected
    switch (action.type) {
        case SET_CURRENT_USER:
        return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            user: action.payload
        };
        default:
          return state;
    }
}