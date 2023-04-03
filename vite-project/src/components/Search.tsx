import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import '../styles/Search.css';

const Search = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const valueFromStorage = localStorage.getItem('value');
    if (valueFromStorage) setValue(valueFromStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem('value', value);
  }, [value]);

  const submitInput: React.MouseEventHandler<HTMLButtonElement> = () => {
    setValue('');
    alert('Text in input: " ' + value + ' "');
  };

  return (
    <div className="search_field">
      <input
        className="searchInput"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="search_btn" onClick={submitInput}>
        Search
      </button>
    </div>
  );
};

export default Search;

// componentDidMount() {
//   const inputValue = localStorage.getItem('inputText');
//   if (inputValue) this.setState({ value: inputValue });
// }

// componentWillUnmount() {
//   localStorage.setItem('inputText', this.state.value);
// }
