import React from 'react';
import './FilterComp.css';

const FilterComp = (props) => {
  const { handleFilterChange } = props;

  return (
    <div>
      <aside className="sidebar ltn__shop-sidebar mb-100">
        <h3 className="mb-10">Filters</h3>
        <div className="widget ltn__menu-widget">
          <h4 className="ltn__widget-title">By Cuisine</h4>
          <ul>
            <li>
              <label className="checkbox-item">
                African
                <input
                  type="checkbox"
                  value={'African'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
                American
                <input
                  type="checkbox"
                  value={'American'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
                British
                <input
                  type="checkbox"
                  value={'British'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              Cajun
                <input
                  type="checkbox"
                  value={'Cajun'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              Caribbean
                <input
                  type="checkbox"
                  value={'Caribbean'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              Chinese
                <input
                  type="checkbox"
                  value={'Chinese'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              Eastern European
                <input
                  type="checkbox"
                  value={'Eastern European'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              European
                <input
                  type="checkbox"
                  value={'European'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              French
                <input
                  type="checkbox"
                  value={'French'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              German
                <input
                  type="checkbox"
                  value={'German'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              Greek
                <input
                  type="checkbox"
                  value={'Greek'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              Indian
                <input
                  type="checkbox"
                  value={'Indian'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              Irish
                <input
                  type="checkbox"
                  value={'Irish'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              Italian
                <input
                  type="checkbox"
                  value={'Italian'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              Japanese
                <input
                  type="checkbox"
                  value={'Japanese'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              Jewish
                <input
                  type="checkbox"
                  value={'Jewish'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              Korean
                <input
                  type="checkbox"
                  value={'Korean'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              Latin American
                <input
                  type="checkbox"
                  value={'Latin American'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              Mediterranean
                <input
                  type="checkbox"
                  value={'Mediterranean'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              Mexican
                <input
                  type="checkbox"
                  value={'Mexican'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              Middle Eastern
                <input
                  type="checkbox"
                  value={'Middle Eastern'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              Nordic
                <input
                  type="checkbox"
                  value={'Nordic'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              Southern
                <input
                  type="checkbox"
                  value={'Southern'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              Spanish
                <input
                  type="checkbox"
                  value={'Spanish'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              Thai
                <input
                  type="checkbox"
                  value={'Thai'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
            <li>
              <label className="checkbox-item">
              Vietnamese
                <input
                  type="checkbox"
                  value={'Vietnamese'}
                  onClick={handleFilterChange}
                />
                <span className="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default FilterComp;
