import { combineReducers, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';


import products from './products';
import categories from './categories';

let reducers = combineReducers({ products, categories });

// create my store and pass this reducers variable

const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();