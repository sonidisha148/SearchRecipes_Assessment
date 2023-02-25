import React from 'react';
import './RecipeDetailComp.css';

const RecipeDetailComp = (props) => {
  const { recipeDetails } = props;
  return (
    <div>
      <h4 className="title">Cooking instructions</h4>
      <p dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}></p>
    </div>
  );
};

export default RecipeDetailComp;
