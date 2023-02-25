/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './GalleryComp.css';

const GalleryComp = (props) => {
  const { recipeDetails } = props;
  return (
    <div>
      <h4 className="title">From Our Gallery</h4>
      <div className="ltn__property-details-gallery mb-30">
        <div className="row">
          <div className="col-md-6">
            <a href="img/others/14.jpg">
              <img className="mb-30" src={recipeDetails.image} alt="Image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryComp;
