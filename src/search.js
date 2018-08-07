import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ isDisabled, handleSearch }) => (
    

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired
}

export default Search