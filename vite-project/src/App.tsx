import './App.css';
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import About from './pages/about';
import Homepage from './pages/homepage';
import NotFound from './pages/notFound';
import Counter from './pages/counter';
import FormPage from './pages/form';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <h1 className="logo">ReactAPP</h1>
          <NavLink className="navigation" to="/">
            Home
          </NavLink>
          <NavLink className="navigation" to="/about">
            About
          </NavLink>
          <NavLink className="navigation" to="/counter">
            Counter
          </NavLink>
          <NavLink className="navigation" to="/form">
            Form
          </NavLink>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer>
          <p> 4Quark </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
