import React from 'react';
import { Link } from 'react-router-dom';

import "./style.css";

const Recipe = (props) => {
    let { recipe } = props;
    return (
        <div className="recipe">
            <h3>{recipe.name}</h3>
            <Link to={`/recipe/${recipe.id}`}>View</Link>
        </div>
    );
}

export default Recipe;