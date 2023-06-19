import React from 'react';
import './header.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header(props) {
  const userConnected = useSelector(state => state.user);

  const handleLogout = (event) => {
    event.preventDefault();
    props.headerLogout();
  };

  return (
    <header>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={props.logo}
            alt={props.logo}
          />
          <h1 className="sr-only">{props.title}</h1>
        </Link>
        <div>
          {userConnected !== null && userConnected !== undefined ? (
            <>
              <Link to="/profile" className="main-nav-item">
                <i className="fa fa-user"></i>
                {userConnected.userName}
              </Link>
              <Link to="/" className="main-nav-item" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i>
                Logout
              </Link>
            </>
          ) : (
            <Link to="/login" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign in
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  headerLogout: PropTypes.func.isRequired,
};

export default Header;
