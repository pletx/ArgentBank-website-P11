import React from 'react';
import './header.css'
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
  const location = useLocation();
  console.log(location.pathname); 

  return (
    <header>
      <nav class="main-nav">
      <a class="main-nav-logo" href="./">
        <img
          class="main-nav-logo-image"
          src={props.logo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a class="main-nav-item" href="./sign-in">
          <i class="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
    </header>
  );
}



export default Header;
