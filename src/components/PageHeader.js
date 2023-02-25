import React from 'react';
import './PageHeader.css';

const PageHeader = () => {
  return (
    <div
      className="breadcrumb-area text-left bg-overlay-white-30 bg-image "
      data-bs-bg="img/bg/14.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inner">
              <h1 className="page-title">Recipe Detail</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
