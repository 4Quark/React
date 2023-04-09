import axios, { AxiosResponse } from 'axios';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { ICharacter, IResult } from '../servises/types';
import '../styles/Search.css';

type SearchProps = {
  search: (results: ICharacter[]) => void;
};

const Search = ({ search }: SearchProps) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const valueFromStorage = localStorage.getItem('value');
    if (valueFromStorage) setSearchValue(valueFromStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem('value', searchValue);
  }, [searchValue]);

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response: AxiosResponse<IResult> = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${searchValue}`
      );
      search(response.data.results);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          search([]);
        } else console.error(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <form className="search_field" onSubmit={handleSubmit}>
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          value={searchValue}
          onChange={handleChange}
          className="searchInput"
        />
      </label>
      <button className="search_btn" type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Search'}
      </button>
    </form>
  );
};

export default Search;
