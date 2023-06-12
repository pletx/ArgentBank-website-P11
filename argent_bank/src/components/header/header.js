import React from 'react';
import './header.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../reducers';
import { Link } from 'react-router-dom';

function Header(props) {
  const userConnected = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("Logout!!!");
    dispatch(logout());
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
  };

  return (
    <header>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={props.logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {userConnected !== null ? (
            <>
            <Link to="/user" className="main-nav-item">
                <i className="fa fa-user"></i>
                {userConnected.userName}
              </Link>
              <Link to="/" className="main-nav-item" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i>
                Logout
              </Link>
              
            </>
          ) : (
            <Link to="/sign-in" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Header;
