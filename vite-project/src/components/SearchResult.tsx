import '../styles/Form.css';
import Card from '../components/Card';
import data from '../data/data.json';

const SearchResult = () => {
  const cards = [];
  for (let i = 0; i < 30; i++) {
    if (data.products[i]) cards.push(data.products[i]);
  }

  return (
    <div className="cards_container">
      {cards.map((card) => (
        <Card post={card} key={card.id} />
      ))}
    </div>
  );
};

export default SearchResult;
