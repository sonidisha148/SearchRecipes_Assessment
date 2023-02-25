import { render } from '@testing-library/react';
import React from 'react';
import './ProductComp.css';

const ProductComp = (props) => {
  const recipe = props.recipe;

  return (
    <div>
      <div className="product-item">
        <div className="product-img">
          <a href={`/SearchRecipes_Assessment/#/recipe-detail/${recipe.id}`}>
            <img src={recipe.image} alt="#" />
          </a>
        </div>
        <div className="product-info">
          <h2 className="product-title">
            <a href={`/SearchRecipes_Assessment/#/recipe-detail/${recipe.id}`}>{recipe.title}</a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductComp;
