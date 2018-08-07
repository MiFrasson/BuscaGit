import React from 'react'
import './form.css';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
	  this.content.value = '';
    event.preventDefault();
  }

  render() {
    return (
      <div className="post-form">
        <form onSubmit={this.handleSubmit}>
          <label>
		  <div className="Form-acessibilidade" id="1"> Faça sua busca, abaixo, aparecerá os resultados</div>
            Busca:
            <input type="search" ref={(input) => this.content = input} aria-labelledby="1"/>
          </label>
          <button className="button">Faça sua busca</button>
        </form>
      </div>
    );
  }
}

export default Form