import * as types from './types';

//====== Action Creators ======//
const actions = {
    getAllRecipes: () => {
        return (dispatch, recipes) => {
            dispatch(
                {
                    type: types.GET_ALL_RECIPES,
                    payload: recipes
                }
            );
        }
    },

    editRecipe: () => {
        return {
            type: types.EDIT_RECIPE
        }
    },

    updateRecipe: (recipe) => {
        return {
            type: types.UPDATE_RECIPE,
            payload: recipe
        }
    },

    createRecipe: (recipe) => {
        return {
            type: types.CREATE_RECIPE,
            payload: recipe
        }
    },

    deleteRecipe: (recipeId) => {
        return {
            type: types.DELETE_RECIPE,
            payload: recipeId
        }
    },

    toggleModal: () => {
        return {
            type: types.TOGGLE_MODAL
        }
    }
}

export default actions