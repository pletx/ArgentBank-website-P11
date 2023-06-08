import React from 'react';
import './header.css';
import PropTypes from 'prop-types';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../reducers';

function Header(props) {
  const token=sessionStorage.getItem('token')
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();


  const handleLogout = () => {
    console.log("Logout!!!")
    dispatch(logout());
    sessionStorage.removeItem(token)
  };

  return (
    <header>
      <nav className="main-nav">
        <a className="main-nav-logo" href="./">
          <img
            className="main-nav-logo-image"
            src={props.logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          {isLoggedIn ? (
            <a className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              Logout
            </a>
          ) : (
            <a className="main-nav-item" href="./sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
