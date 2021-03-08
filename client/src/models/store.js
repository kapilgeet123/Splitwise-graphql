import {createStore , applyMiddleware, compose } from 'redux'

//import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import {mathReducer} from './reducers/mathReducer'
// const enhancers = compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );
export const store = createStore(mathReducer,composeWithDevTools(applyMiddleware(logger)));

store.subscribe(()=>{
    console.log("subscribe .....",store.getState());
})