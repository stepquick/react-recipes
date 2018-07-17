import React from 'react';
import PropTypes from 'prop-types';

import RecipeList from './components/recipe-list';

const RecipePage = ({deleteRecipe, recipes}) => {
    return (
        <div>
            <h1>All Recipes</h1>
            <RecipeList deleteRecipe={deleteRecipe} recipes={recipes}/>
        </div>
    );
}

RecipePage.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      ingredients: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string.isRequired
      })).isRequired
    }).isRequired
  ).isRequired,
  deleteRecipe: PropTypes.func.isRequired
};

export default RecipePage;
