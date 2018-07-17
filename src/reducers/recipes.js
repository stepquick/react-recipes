import {
    GET_ALL_RECIPES,
    UPDATE_RECIPE, 
    DELETE_RECIPE,
    CREATE_RECIPE
} from '../actions/types.js'

//====== Reducer Helpers =========//
function getNextId(lastId) {
    return lastId + 1;
}

const INITIAL_STATE = {
    lastId: 0,
    all: [],
}

const recipes = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_RECIPES:
            return Object.assign({}, state, { all: action.payload.recipes.all })
        case UPDATE_RECIPE:
            return Object.assign({}, state, {
                all: state.all.map(recipe => {
                    if (recipe.id === action.payload.id) {
                        return action.payload;
                    }
                    return recipe
                })
            }
            );
        case CREATE_RECIPE:
            let newRecipe = action.payload;
            newRecipe.id = getNextId(state.lastId);
            let allRecipes = state.all;
            allRecipes.push(newRecipe);
            return Object.assign({}, state, { all: allRecipes });
        case DELETE_RECIPE:
            return Object.assign({}, state, {
                all: state.all.filter(recipe => {
                    return recipe.id !== action.payload;
                })
            });
        default:
            return state;   
    }
};

export default recipes;