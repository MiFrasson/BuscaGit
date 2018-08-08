import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import AppContent from './app-content';

class App extends Component {
	constructor () {
		super()
		this.state = {
			userinfo: null,
			repos: [],
			starred: [],
			isFetching: false
			}
	}
	handleSearch (e) {
		const value = e.target.value;
		const keyCode = e.which || e.keyCode;
		const ENTER = 13;
		if (keyCode === ENTER) {
			this.setState({isFetching: true})
			var ajax = new XMLHttpRequest();
			ajax.open('GET', `https://api.github.com/users/${value}`);
			ajax.send();
			ajax.addEventListener('readystatechange', function() {
				if(isRequestOk() ) {
					try {
						var user = JSON.parse(ajax.responseText);
						this.setState( {
							userinfo: {
								username: user.name,
								photo: user.avatar_url,
								login: user.login,
								repos: user.public_repos,
								followers: user.followers,
								following: user.following
							},
							repos: [],
							starred: [],
							})
							this.setState({isFetching: false})
							}
							catch(e) {
								this.setState({isFetching: false})
							}
				}
				}.bind(this));
							function isRequestOk() {
								return ajax.readyState === 4 && ajax.status === 200;
							}
		}
	}
	handleClick (type) {
		return (e) => {
			var ajax = new XMLHttpRequest();
			ajax.open('GET', `https://api.github.com/users/${this.state.userinfo.login}/${type}`);
			ajax.send();
			ajax.addEventListener('readystatechange', function() {
				if(isRequestOk() ) {
					try {
						var repositories = JSON.parse(ajax.responseText);
						this.setState({
							[type]:
							repositories.map((item) => {
								return {
									name: item.name,
									link: item.html_url
								}
								})
								})
					} catch(e) {
						console.log(e);
					}
				}
				}.bind(this));
					function isRequestOk() {
						return ajax.readyState === 4 && ajax.status === 200;
					}
		}
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Logo do ReactJS" />
          <h1 className="App-title">Bem-vindo ao Busca Git!</h1>
        </header>
        <p className="App-intro" role="main">
          Aqui você poderá procurar perfis de usuários do GitHub, no campo que estará localizado logo abaixo
		  </p>
		  <Form />
		<footer className="App-header">
		Desenvolvido por Mi Frasson
		</footer>
      </div>
    );
  }
}

export default App;
