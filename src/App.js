import React from 'react';
import './App.css';
//import './assets/css/plugins.css'
//import './assets/css/style.css'

import { HashRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/';
import RecipeDetail from './pages/RecipeDetail';

const App = () => {
  return (
    <div>
      {
        <HashRouter basename="/">
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path="/recipe-detail/:id" element={<RecipeDetail />} />
          </Routes>
        </HashRouter>
      }
    </div>
  );
};

export default App;
