import React from 'react';
import PropTypes from 'prop-types';
import './user-info.css';


const UserInfo = ({ userinfo }) => (
	      <div className='user-info'>
	<div className='img' role="banner">
      <img src={userinfo.photo} alt='Foto do Usuário' />
	  </div>
	  <div role="complementary">
      <h1>
          <a href={`http://github.com/${userinfo.login}`}>
            {userinfo.username}
          </a>
      </h1>
      <ul className='repos-info'>
          <li  tabindex="0">Repositórios: {userinfo.repos}</li>
          <li  tabindex="0">Seguidores: {userinfo.followers}</li>
          <li  tabindex="0">Seguindo: {userinfo.following}</li>
      </ul>
	  </div>
    </div>


)

UserInfo.propTypes = {
    userinfo: PropTypes.shape({
        username: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired
    })
}

export default UserInfo
