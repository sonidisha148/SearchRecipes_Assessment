import React from 'react';
import './HealthInformationComp.css';

const HealthInformationComp = (props) => {
  const { recipeDetails } = props;
  return (
    <div>
      <h4 className="title">Health Information</h4>
      <div className="property-detail-feature-list clearfix mb-30">
        <ul>
          <li>
            <div className="property-detail-feature-list-item">
              <i></i>
              <div>
                <h6>Vegan</h6>
                <small>{recipeDetails.vegan ? 'Yes' : 'No'}</small>
              </div>
            </div>
          </li>
          <li>
            <div className="property-detail-feature-list-item">
              <i></i>
              <div>
                <h6>Dairy-Free</h6>
                <small>{recipeDetails.dairyFree ? 'Yes' : 'No'}</small>
              </div>
            </div>
          </li>
          <li>
            <div className="property-detail-feature-list-item">
              <i></i>
              <div>
                <h6>Gluten-Free</h6>
                <small>{recipeDetails.glutenFree ? 'Yes' : 'No'}</small>
              </div>
            </div>
          </li>
          <li>
            <div className="property-detail-feature-list-item">
              <i></i>
              <div>
                <h6>Vegetarian</h6>
                <small>{recipeDetails.vegetarian ? 'Yes' : 'No'}</small>
              </div>
            </div>
          </li>
          <li>
            <div className="property-detail-feature-list-item">
              <i></i>
              <div>
                <h6>Very Healthy</h6>
                <small>{recipeDetails.veryHealthy ? 'Yes' : 'No'}</small>
              </div>
            </div>
          </li>
          <li>
            <div className="property-detail-feature-list-item">
              <i></i>
              <div>
                <h6>Health Score</h6>
                <small>{recipeDetails.healthScore}</small>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HealthInformationComp;
