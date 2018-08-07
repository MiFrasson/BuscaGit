import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ userinfo }) => (
    <section className='user-info'>
      <img src={userinfo.photo} alt='Foto do Usuário' />
      <h1>
          <a href={`http://github.com/${userinfo.login}`}>
            {userinfo.username}
          </a>
      </h1>
      <ul className='repos-info'>
          <li>Repositórios: {userinfo.repos}</li>
          <li>Seguidores: {userinfo.followers}</li>
          <li>Seguindo: {userinfo.following}</li>
      </ul>
    </section>
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
