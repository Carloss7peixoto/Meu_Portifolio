// App.js
import React from 'react';
import './App.css';
import Home from './components/Home';
import SobreMim from './components/SobreMim';
import Contato from './components/Contato';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Meu Portfólio</h1>
      </header>

      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#sobre">Sobre mim</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      <section id="home">
        <Home />
      </section>

      <section id="sobre">
        <SobreMim />
      </section>

      <section id="contato">
        <Contato />
      </section>

      <footer>
        <p>© 2023 Meu Portfólio</p>
      </footer>
    </div>
  );
}

export default App;
