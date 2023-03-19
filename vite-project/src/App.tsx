import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom';
import About from './pages/about';
import Homepage from './pages/homepage';
import NotFound from './pages/notFound';
import Counter from './pages/counter';

function App() {

  return (
    <div className='App'>
      <header className='header'>
        <h1> ReactAPP </h1>
        <NavLink className='navigation' to="/">Home</NavLink>
        <NavLink className='navigation' to="/about">About</NavLink>
        <NavLink className='navigation' to="/counter">Counter</NavLink>
      </header>
      
      <body>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </body>
      
    </div>
  );
}

export default App;
