import axios, { AxiosResponse } from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import SearchCard from '../components/SearchCard';
import '../styles/Modal.css';
import '../styles/Search.css';

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

interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

const Homepage = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<ICharacter[]>([]);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [modalCharacter, setModalCharacter] = useState<ICharacter>(results[0]);
  const [modalEpisodes, setModalEpisodes] = useState<string>('');

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
      console.error(err);
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

  const openModal = (id: number) => {
    setIsModal(true);
    const character = results.filter((i) => i.id === id);
    setModalCharacter(character[0]);
    getEpisodes(id);
  };

  const getEpisodes = (id: number) => {
    const episodesArr: string[] = [];
    results[id].episode.forEach(async (episode) => {
      try {
        const response: AxiosResponse<IEpisode> = await axios.get(episode);
        const episodeInfo: string = response.data.episode + ' ' + response.data.name;
        episodesArr.push(episodeInfo);
        console.log(episodeInfo);
      } catch (err: unknown) {
        console.error(err);
      } finally {
        setModalEpisodes(episodesArr.join(', '));
      }
    });
  };

  return (
    <div className="home_container">
      <h1>RS School React</h1>

      <div className="page-wrap">
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
      </div>
      <div className="cards_container">
        {results.length !== 0 ? (
          results?.map((card, i) => (
            <SearchCard
              key={i}
              openModal={openModal}
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
      {isModal ? (
        <div
          className="modal_container"
          onClick={(e) => e.currentTarget === e.target && setIsModal(false)}
        >
          <div className="modal_wrapper">
            <div className="modal_window">
              <div className="close" onClick={() => setIsModal(false)}>
                ✖
              </div>
              <div className="modal_info">
                <div className="modal_main_info">
                  <h2>{modalCharacter.name}</h2>
                  <div className="modal_picture">
                    <img className="modal_img" src={modalCharacter.image} />
                  </div>
                </div>
                <div className="modal_additional_info">
                  <h5 className="card_subheader">Species: {modalCharacter.species}</h5>
                  <div className="card_text">Gender: {modalCharacter.gender}</div>
                  {modalCharacter.type ? (
                    <div className="card_text">Type: {modalCharacter.type}</div>
                  ) : (
                    <div className="card_text">No type</div>
                  )}
                  <div className="card_text">Status: {modalCharacter.status}</div>
                  <div className="card_text">Location: {modalCharacter.location.name}</div>
                  <div className="card_text">Origin: {modalCharacter.origin.name}</div>
                  <div className="card_text">Episode(s): {modalEpisodes}</div>
                  <div className="card_text">url: {modalCharacter.url}</div>
                  <div className="card_text">created: {modalCharacter.created}</div>
                </div>
              </div>
              <button className="card_btn" onClick={() => setIsModal(false)}>
                close
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Homepage;
