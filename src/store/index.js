import { combineReducers, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';


import categories from './categories';
import cart from './cart';


let reducers = combineReducers({ categories, cart });


const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();