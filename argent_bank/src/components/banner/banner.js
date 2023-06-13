import React from 'react';
import './banner.css';
import PropTypes from 'prop-types';
function Banner(props){
    return(
        <div class="hero">
        <section className="hero-content">
          <h2 className="sr-only">{props.sronly}</h2>
          <p className="subtitle">{props.subtitle1}</p>
          <p className="subtitle">{props.subtitle2}</p>
          <p className="subtitle">{props.subtitle3}</p>
          <p className="text">{props.text}</p>
        </section>
      </div>
    )
}

export default Banner;