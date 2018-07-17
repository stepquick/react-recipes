import React from "react";

import {Redirect} from 'react-router-dom';

const Recipe = props => {
  const { id } = props.params;
  const i = props.recipes.findIndex(recipe => recipe.id === id);
  const recipe = props.recipes[i];

  if (~i) {
    return (
      <div>
        <h1>{recipe.name}</h1>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  return <Redirect to="/404" />;
};

export default Recipe;
