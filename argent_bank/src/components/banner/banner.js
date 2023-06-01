import React from 'react';
import './banner.css';
import PropTypes from 'prop-types';
function Banner(props){
    return(
        <div class="hero">
        <section class="hero-content">
          <h2 class="sr-only">{props.sronly}</h2>
          <p class="subtitle">{props.subtitle1}</p>
          <p class="subtitle">{props.subtitle2}</p>
          <p class="subtitle">{props.subtitle3}</p>
          <p class="text">{props.text}</p>
        </section>
      </div>
    )
}

export default Banner;