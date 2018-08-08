import React from 'react'
import './search.css';
import PropTypes from 'prop-types';

const Search = ({ isDisabled, handleSearch }) => (

      <div className="search-form" role="form">
          <label>
		  <div className="Form-acessibilidade" id="1"> Faça sua busca, abaixo, aparecerá os resultados</div>
            Busca:
            <input type="search" aria-labelledby="1"/>
          </label>
          <button className="button" disabled={isDisabled} onKeyUp={handleSearch}>Faça sua busca</button>
      </div>
    )
	Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired
}

export default Search
