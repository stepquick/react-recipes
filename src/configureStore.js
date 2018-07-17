import { createStore, compose } from 'redux'
import recipeApp from './reducers'

import recipes from './data/recipes';

//create object for defaults
const defaultState = {
    recipes
};

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const configureStore = () => {
    const store = createStore(recipeApp, defaultState, enhancers);
    return store;
}

export default configureStore;