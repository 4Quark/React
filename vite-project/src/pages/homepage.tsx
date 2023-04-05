import React from 'react';
import Search from '../components/Search';
import SearchResult from '../components/SearchResult';

const Homepage = () => {
  return (
    <div className="home_container">
      <h1>RS School React</h1>
      <Search />
      <SearchResult />
    </div>
  );
};

export default Homepage;
