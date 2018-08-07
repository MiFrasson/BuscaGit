import React from 'react';
import PropTypes from 'prop-types';

const Actions = ({ getRepos, getStarred }) => (
    <div className='actions'>
        <button className='button button-clear' onClick={getRepos}>Repositórios</button>
        <button className='button button-clear' onClick={getStarred}>Favoritos</button>
    </div>
)

Actions.propTypes = {
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired
}

export default Actions