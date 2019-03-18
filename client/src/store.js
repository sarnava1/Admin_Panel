//this is the redux store

//importing the dependancies
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//the middleware for the store
const middleware= [thunk];

//the initial state
const initialState = {};

//creating the store
const store = createStore(
     rootReducer,
     initialState,
     compose(
        applyMiddleware(...middleware),      
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     )
);
     

//exporting the store
export default store;
