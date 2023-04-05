import React, { useState } from 'react';
import FormCard from './FormCard';
import '../styles/Form.css';
import Card from '../components/Card';
import data from '../data/data.json';

interface ICard {
  id: number;
  name: string;
  date: string;
  country: string;
  email: string;
  mobile: string;
  gender: boolean;
  skills: string;
  checkbox: boolean;
  file: string;
}

const SearchResult = () => {
  // const [cards, setCards] = useState<ICard[]>([]);
  const cards = [];
  for (let i = 0; i < 30; i++) {
    if (data.products[i]) cards.push(data.products[i]);
  }

  return (
    <div className="cards_container">
      {cards.map((card) => (
        <Card post={card} key={card.id} />
      ))}
{/* 
      {cards.length !== 0 ? (
        cards?.map((card, i) => (
          <FormCard
            key={i}
            remove={removeCard}
            id={card.id}
            name={card.name}
            date={card.date}
            select={card.country}
            email={card.email}
            mobile={card.mobile}
            switcher={card.gender}
            skills={card.skills}
            checkbox={card.checkbox}
            file={card.file}
          />
        ))
      ) : (
        <h2>Nothing found </h2>
      )} */}
    </div>
  );
};

export default SearchResult;
