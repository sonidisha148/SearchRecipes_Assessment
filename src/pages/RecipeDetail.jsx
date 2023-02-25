import React, { useEffect, useState } from 'react';

import IngredientsComp from '../components/IngredientsComp';
import GalleryComp from '../components/GalleryComp';
import RecipeDetailComp from '../components/RecipeDetailComp';
import HealthInformationComp from '../components/HealthInformationComp';
import PageHeader from '../components/PageHeader';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  let { id } = useParams();
  const API_KEY = '439188cf55b340c5a30927106817bba1';
  const SEARCH_ENDPOINT = `https://api.spoonacular.com/recipes/${id}/information`;
  const [recipeDetails, setRecipeDetails] = useState({});

  const searchRecipeDetails = async () => {
    const url = `${SEARCH_ENDPOINT}?apiKey=${API_KEY}`;
    return await fetch(url).then((response) => response.json());
  };

  useEffect(() => {
    searchRecipeDetails().then((res) => {
      setRecipeDetails(res);
    });
  }, []);

  return (
    <div>
      <PageHeader />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {recipeDetails.id ? (
              <>
                <a href="/SearchRecipes_Assessment/#">Back</a>
                <h1 className="mb-30">{recipeDetails.title}</h1>
                <RecipeDetailComp recipeDetails={recipeDetails} />
                <IngredientsComp recipeDetails={recipeDetails} />
                <HealthInformationComp recipeDetails={recipeDetails} />
                <GalleryComp recipeDetails={recipeDetails} />
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
