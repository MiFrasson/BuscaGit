import React from 'react'
import './search.css';
import PropTypes from 'prop-types';

const Search = ({ isDisabled, handleSearch, handleClick, updateInputValue }) => (

      <div className="search-form" role="form">
          <label>
		  <div className="Form-acessibilidade" id="1"> Faça sua busca, abaixo, aparecerá os resultados</div>
            Busca:
            <input type="search" aria-labelledby="1" onKeyUp={handleSearch} onChange={updateInputValue}/>
          </label>
          <button className="button-busca" disabled={isDisabled} onClick={handleClick}>Faça sua busca</button>
      </div>
    )
	Search.propTypes = {
    isDisabled: PropTypes.bool,    
    handleSearch: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    updateInputValue: PropTypes.func.isRequired
}

export default Search
