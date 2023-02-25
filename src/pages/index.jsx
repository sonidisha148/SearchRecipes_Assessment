import React, { useEffect, useState } from 'react';

import FilterComp from '../components/FilterComp';
import BreadcrumbComp from '../components/BreadcrumbComp';
import PaginationComp from '../components/PaginationComp';
import ProductComp from '../components/ProductComp';

const MainPage = () => {
  const API_KEY = '439188cf55b340c5a30927106817bba1';
  const SEARCH_ENDPOINT = 'https://api.spoonacular.com/recipes/complexSearch';
  const NUMBER_OF_RECIPE_PER_PAGE = 5;
  const [recipes, setRecipes] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [currentQuery, setCurrentQuery] = useState('');
  const [currentFilters, setCurrentFilters] = useState([]);

  const searchRecipes = async (query, offset) => {
    const url = `${SEARCH_ENDPOINT}?query=${query}&apiKey=${API_KEY}&number=${NUMBER_OF_RECIPE_PER_PAGE}&offset=${offset}&cuisine=${currentFilters.join(',')}`;
    return await fetch(url).then((response) => response.json());
  };

  useEffect(() => {
    searchRecipes(currentQuery, currentOffset).then((response) => {
      setRecipes(response.results);
      setTotalResults(response.totalResults);
    });
  }, [currentQuery, currentOffset, currentFilters]);

  useEffect(() => {
    setTotalPages(Math.ceil(totalResults / NUMBER_OF_RECIPE_PER_PAGE));
  }, [totalResults]);

  useEffect(() => {
    setCurrentOffset(currentPage * NUMBER_OF_RECIPE_PER_PAGE);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(0);
  }, [currentQuery]);

  useEffect(() => {
    setCurrentPage(0);
  }, [currentFilters]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setCurrentOffset(page * NUMBER_OF_RECIPE_PER_PAGE);
  };

  const handlePrevPageChange = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPageChange = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFirstPageChange = () => {
    setCurrentPage(0);
  };

  const handleLastPageChange = () => {
    setCurrentPage(totalPages - 1);
  };

  const handleOnSubmitSearchForm = (e) => {
    e.preventDefault();
    const searchForm = document.forms.searchForm;
    if (searchForm.search.value) {
      setCurrentQuery(searchForm.search.value);
    }
  };

  const handleFilterChange = (e) => {
    let filters = [...currentFilters];

    if (e.target.checked) {
      filters.push(e.target.value);
    } else {
      filters = filters.filter((f) => f !== e.target.value);
    }

    setCurrentFilters([...filters]);
  };

  return (
    <div>
      <BreadcrumbComp />
      <div className="ltn__product-area mb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <FilterComp handleFilterChange={handleFilterChange} />
            </div>
            <div className="col-lg-8">
            <div className="row">
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
        </div>
              <div className="row">
                {recipes.map((recipe) => {
                  return (
                    <div className="col-lg-6" key={recipe.id}>
                      <ProductComp recipe={recipe} />
                    </div>
                  );
                })}
                {/* <div className="col-lg-6">
                  <ProductComp />
                </div>
                <div className="col-lg-6">
                  <ProductComp />
                </div>
                <div className="col-lg-6">
                  <ProductComp />
                </div>
                <div className="col-lg-6">
                  <ProductComp />
                </div>
                <div className="col-lg-6">
                  <ProductComp />
                </div> */}
              </div>
              <PaginationComp
                totalPages={totalPages}
                handlePageChange={handlePageChange}
                currentPage={currentPage}
                handlePrevPageChange={handlePrevPageChange}
                handleNextPageChange={handleNextPageChange}
                handleFirstPageChange={handleFirstPageChange}
                handleLastPageChange={handleLastPageChange}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <script
        src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
        crossorigin="anonymous"
      ></script> */}
    </div>
  );
};

export default MainPage;
