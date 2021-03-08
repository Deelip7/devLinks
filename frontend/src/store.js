import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { linkReducers } from './reducers/linkReducers';

const reducer = combineReducers({
  link: linkReducers,
});

const middleware = [thunk]; //middleware for async action creators
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
