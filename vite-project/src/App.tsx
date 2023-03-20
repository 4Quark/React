import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom';
import About from './pages/about';
import Homepage from './pages/homepage';
import NotFound from './pages/notFound';
import Counter from './pages/counter';
import Form from './components/Form';

function App() {

  return (
    <div className='App'>
      <header className='header'>
        <NavLink className='navigation' to="/">Home</NavLink>
        <NavLink className='navigation' to="/about">About</NavLink>
        <NavLink className='navigation' to="/counter">Counter</NavLink>
        <NavLink className='navigation' to="/form">Form</NavLink>
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <footer> 
        <p> ReactAPP </p> 
      </footer>
    </div>
  );
}

export default App;
