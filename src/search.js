import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ isDisabled, handleSearch }) => (
    <div className='search'>
        <label>
          <span>Digite o nome do usuário</span>
          <input
            type='search'
            placeholder='Ex. Baltazar Parra'
            disabled={isDisabled}
            onKeyUp={handleSearch}
          />
        </label>
    </div>
)

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired
}

export default Search