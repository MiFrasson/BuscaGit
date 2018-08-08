import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './search';
import AppContent from './app-content';
import UserInfo from './user-info';


class App extends Component {
	constructor () {
		super()
		this.state = {
			userinfo: {},
			repos: [],
			starred: [],
			isFetching: false,
			isContentLoaded: false,
			inputValue: null
			}
	}
	updateInputValue = (e) => {
		this.setState({
		inputValue: e.target.value
		})
			}
	handleSearch = (e) => {
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
							this.setState({isFetching: false,
							isContentLoaded: true})
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
		handleClick = (e) => {
			const ajax = new XMLHttpRequest();
			ajax.open('GET', `https://api.github.com/users/${this.state.inputValue}`);
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
							this.setState({
								isFetching: false,
								isContentLoaded: true
							})
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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bem-vindo ao Busca Git!</h1>
        </header>
        <p className="App-intro" role="main">
          Aqui você poderá procurar perfis de usuários do GitHub, no campo que estará localizado logo abaixo
		  </p>
		  <Search isDisabled={false} handleSearch={this.handleSearch} handleClick={this.handleClick} updateInputValue={this.updateInputValue}/>
		  {this.state.isContentLoaded && <UserInfo userinfo={this.state.userinfo}/>}
		<footer className="App-header">
		Desenvolvido por Mi Frasson
		</footer>
      </div>
    );
  }
}

export default App;
