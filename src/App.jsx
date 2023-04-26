import { useState, useEffect } from 'react';
import { fetchDataFromAPI } from './utils/api';
import { useSelector, useDispatch } from 'react-redux';

import { getApiConfiguration } from './store/homeSlice';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';

const App = () => {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.home);
  console.log(url);
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromAPI('/movie/popular/').then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <>
      <div className="App" style={{ color: '#fff' }}>
        App
        {url?.total_pages}
      </div>
    </>
  );
};

export default App;
