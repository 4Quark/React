import React from 'react'
import Card from '../components/Card';
import Search from '../components/Search';
import data from '../data/data.json'

const Homepage = () => {
    const cards = []; 
    for (let i = 0; i < 30; i++) {
        cards.push(data.products[i]);
    }

    return (
        <div className='home_container'>
            <h1>RS School React</h1>
            <Search/>
            <div className='cards_container'>
                {cards.map(card => <Card post={card} />)}
            </div>
        </div>
    );
};

export default Homepage;
