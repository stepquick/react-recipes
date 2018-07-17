import React from "react";

import "./style.css";

import Recipe from "./recipe";
const RecipeList = props => {
  let { recipes } = props;
  return (
    <div>
      <div className="recipe-grid">
        {recipes.map((recipe, index) => <Recipe recipe={recipe} key={index} />)}
      </div>
    </div>
  );
};

export default RecipeList;
