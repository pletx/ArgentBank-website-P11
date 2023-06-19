import React from 'react';
import './banner.css';
import PropTypes from 'prop-types';
function Banner(props){
    return(
        <div className="hero">
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
Banner.propTypes = {
  sronly: PropTypes.string.isRequired,
  subtitle1: PropTypes.string.isRequired,
  subtitle2: PropTypes.string.isRequired,
  subtitle3: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Banner;