import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/about';
import Homepage from './pages/homepage';
import Cards from './pages/cards';
import NotFound from './pages/notFound';

function App() {

  return (
    <div className='App'>
      <div className='header'>
        <Link to="/">Home</Link>
        <Link to="/cards">Cards</Link>
        <Link to="/about">About</Link>
      </div>
      
      <Routes>
         <Route path="/" element={<Homepage />} />
         <Route path="/cards" element={<Cards />} />
         <Route path="/about" element={<About />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
