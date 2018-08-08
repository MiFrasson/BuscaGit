import React from 'react'
import './search.css';
import PropTypes from 'prop-types';

const Search = ({ isDisabled, handleSearch }) => (

      <div className="search-form" role="form">
          <label>
		  <div className="Form-acessibilidade" id="1"> Faça sua busca, abaixo, aparecerá os resultados</div>
            Busca:
            <input type="search" aria-labelledby="1" onKeyUp={handleSearch}/>
          </label>
          <button className="button" disabled={isDisabled}>Faça sua busca</button>
      </div>
    )
	Search.propTypes = {
    handleSearch: PropTypes.func.isRequired
}

export default Search
