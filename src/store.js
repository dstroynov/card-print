import {combineReducers, compose, createStore} from 'redux';
import definitions from './redux';

const initialState = {};
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    ...enhancers
);

const store = createStore(
    combineReducers({
        definitions,
    }),
    initialState,
    composedEnhancers
);

export default store;
