

import React from 'react'
import Card from '../components/Card';

const Cards = () => {
    return (
        <div>
            <h1>About header</h1>
            <Card post={{id: 1, title: 'First post', text: 'Lorem ipsum dolor'}} />
            <Card post={{id: 2, title: 'Second post', text: 'Lorem dolorrem ipsum dolor'}} />
        </div>
    );
};

export default Cards;

