/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import './PaginationComp.css';

const PaginationComp = (props) => {
  const {
    totalPages,
    handlePageChange,
    currentPage,
    handlePrevPageChange,
    handleNextPageChange,
    handleFirstPageChange,
    handleLastPageChange,
  } = props;
  const pagesToDisplay = totalPages > 7 ? 7 : totalPages;

  const renderPagination = (index) => {
    if (
      index < parseInt(pagesToDisplay / 2) &&
      currentPage < totalPages - pagesToDisplay
    ) {
      return (
        <li className={index + currentPage === currentPage ? 'active' : ''}>
          <a onClick={() => handlePageChange(index + currentPage)}>
            {index + currentPage + 1}
          </a>
        </li>
      );
    } else if (
      index === parseInt(pagesToDisplay / 2) &&
      currentPage < totalPages - pagesToDisplay
    ) {
      return (
        <li>
          <a>...</a>
        </li>
      );
    } else {
      return (
        <li
          className={
            totalPages - (pagesToDisplay - index) === currentPage
              ? 'active'
              : ''
          }
        >
          <a
            onClick={() =>
              handlePageChange(totalPages - (pagesToDisplay - index))
            }
          >
            {totalPages - (pagesToDisplay - index) + 1}
          </a>
        </li>
      );
    }
  };

  return (
    <div>
      <div className="pagination-area text-center">
        <div className="pagination">
          <ul>
            <li>
              <a onClick={handleFirstPageChange}>&lt;&lt;</a>
            </li>
            <li>
              <a onClick={handlePrevPageChange}>Prev</a>
            </li>
            {[...Array(pagesToDisplay)].map((page, index) => {
              return (
                <Fragment key={index + 1}>{renderPagination(index)}</Fragment>
              );
            })}
            <li>
              <a onClick={handleNextPageChange}>Next</a>
            </li>
            <li>
              <a onClick={handleLastPageChange}>&gt;&gt;</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaginationComp;
