import React from 'react';
import './IngredientsComp.css';

const IngredientsComp = (props) => {
  const { recipeDetails } = props;
  return (
    <div>
      <h4 className="title">Ingredients</h4>
      <div className="ingredients-detail-info-list section-bg-1 clearfix mb-30">
      <ul >
        {recipeDetails.extendedIngredients.map((ing, index) => {
          return (
            
              <li key={index}>
                <label>{ing.name}</label>
                <span>
                  Metric (
                  {ing.measures.metric.unitLong
                    ? ing.measures.metric.unitLong
                    : 'pcs'}
                  : {ing.measures.metric.amount})
                </span>
                <span>
                  US (
                  {ing.measures.us.unitLong ? ing.measures.us.unitLong : 'pcs'}:{' '}
                  {ing.measures.us.amount})
                </span>
              </li>
            
          );
        })}
        </ul>
      </div>
    </div>
  );
};

export default IngredientsComp;
