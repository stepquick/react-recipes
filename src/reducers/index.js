import { combineReducers } from 'redux';
import recipes from './recipes';
import modal from './recipes';

const recipesApp = combineReducers({
    recipes,
    modal
});

export default recipesApp;