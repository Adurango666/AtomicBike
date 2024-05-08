import React from 'react';
import Form from './components/formulario.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/about.js'
import CardList from './cards';
import logo from "../src/assets/logo.jpg";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="listnav">
          <li>
          <img src={logo} alt="Logo" className="logo" />
          </li>
          <li><Link to="/Home">Inicio</Link></li>
          <li><Link to="/Registrese">Registrese</Link></li>
          <li><Link to="/about">Sobre Nosotros</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Registrese" element={<Form />} />
          <Route path="/about" element={<About />} />
          <Route path="/Home" element={<CardList />} />
        </Routes>
        <footer>
        <ul class="listnav">
            <li><a href="https://www.instagram.com/alejandro_durango99/">Desarrollado por: alejandro_durango99</a></li>       
        </ul>
</footer>

      </div>
    </Router>
    
  );
}

export default App;





