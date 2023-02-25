import React from 'react';
import './BreadcrumbComp.css';

const BreadcrumbComp = (props) => {
  const { handleOnSubmitSearchForm } = props;

  return (
    <div
      className="breadcrumb-area text-left bg-overlay-white-30 bg-image "
      data-bs-bg="img/bg/14.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inner">
              <h1 className="page-title">Search For A Recipe</h1>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-12">
            <div className="search-widget mb-30">
              <form id="searchForm" onSubmit={handleOnSubmitSearchForm}>
                <input
                  type="text"
                  name="search"
                  placeholder="Search your keyword..."
                />
                <button type="submit">
                  <i className="search">Go</i>
                </button>
              </form>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BreadcrumbComp;
