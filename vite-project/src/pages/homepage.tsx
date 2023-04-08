import axios, { AxiosError, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import Search from '../components/Search';
import SearchCard from '../components/SearchCard';
import { ICharacter, IResult, IEpisode } from '../servises/types';
import '../styles/Modal.css';
import '../styles/Search.css';

const Homepage = () => {
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

  const openModal = (id: number) => {
    setIsModal(true);
    const character = results.filter((i) => i.id === id);
    setModalCharacter(character[0]);
    getEpisodes(character[0]);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const search = (results: ICharacter[]) => {
    setResults(results);
  };

  const getEpisodes = (character: ICharacter) => {
    const episodesArr: string[] = [];
    character.episode.forEach(async (episode) => {
      try {
        const response: AxiosResponse<IEpisode> = await axios.get(episode);
        const episodeInfo: string = response.data.episode + ' ' + response.data.name;
        episodesArr.push(episodeInfo);
      } catch (e) {
        const error = e as AxiosError;
        console.log(error.status);
      } finally {
        setModalEpisodes(episodesArr.join(', '));
      }
    });
  };

  return (
    <div className="home_container">
      <h1>RS School React</h1>
      <Search search={search} />

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
          <h2>There is nothing here</h2>
        )}
      </div>
      {isModal && (
        <Modal
          modalCharacter={modalCharacter}
          modalEpisodes={modalEpisodes}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Homepage;
