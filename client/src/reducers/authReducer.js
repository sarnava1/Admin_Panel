//importing the dependancies


//the initial state for the auth reducer
const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialState, action) {
    //based on the action type our action will selected
    switch (action.type) {
        default:
          return state;
    }
}