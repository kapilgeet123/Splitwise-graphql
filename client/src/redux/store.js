import {createStore , applyMiddleware, compose } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import {userReducer} from './reducers/userReducer';


// const enhancers = compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );
export const store = createStore(userReducer,composeWithDevTools(applyMiddleware(logger)));

store.subscribe(()=>{
    console.log("subscribe .....",store.getState());
})