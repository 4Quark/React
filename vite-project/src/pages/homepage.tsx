import axios, { AxiosResponse } from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import Search from '../components/Search';
import SearchCard from '../components/SearchCard';
import SearchResult from '../components/SearchResult';

interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface IResult {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: ICharacter[];
}

const Homepage = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<ICharacter[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: AxiosResponse<IResult> = await axios.get(
        'https://rickandmortyapi.com/api/character'
      );
      setResults(response.data.results);
    };
    fetchData().catch(console.error);
  }, []);

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response: AxiosResponse<IResult> = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${searchValue}`
      );
      setResults(response.data.results);
    } catch (err: unknown) {
      console.error(e);
      setResults([]);
    } finally {
      setIsLoading(false);
      console.log(results);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <div className="home_container">
      <h1>RS School React</h1>

      <div className="page-wrap">
        <form className="search-gr" onSubmit={handleSubmit}>
          <label htmlFor="search">
            <input
              id="search"
              type="text"
              value={searchValue}
              onChange={handleChange}
              className="input"
            />
          </label>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Search'}
          </button>
        </form>
      </div>
      <div className="cards_container">
        {results.length !== 0 ? (
          results?.map((card, i) => (
            <SearchCard
              key={i}
              id={results[i].id}
              name={results[i].name}
              status={results[i].status}
              species={results[i].species}
              type={results[i].type}
              gender={results[i].gender}
              episode={results[i].episode}
              image={results[i].image}
            />
          ))
        ) : (
          <h2>Nothing found </h2>
        )}
      </div>
      <Search />
      <SearchResult />
    </div>
  );
};

export default Homepage;
