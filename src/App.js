import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Foto-desenvolvedora" />
          <h1 className="App-title">Bem-vindo ao Busca Git!</h1>
        </header>
        <p className="App-intro">
          Aqui você poderá procurar perfis de usuários do GitHub.
		  <Form />
		  </p>
		<footer className="App-header">
		Desenvolvido por Mi Frasson
		</footer>
      </div>
    );
  }
}

export default App;
