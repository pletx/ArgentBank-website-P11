import React from 'react';
import PropTypes from 'prop-types';
import './feature.css';

function Feature(props) {
  return (
    <div className="feature-item">
      <img src={props.icon} alt={props.iconalt} className="feature-icon" />
      <h3 className="feature-item-title">{props.featuretitle}</h3>
      <p>{props.featurecontent}</p>
    </div>
  );
}

Feature.propTypes = {
  icon: PropTypes.string.isRequired,
  iconalt: PropTypes.string.isRequired,
  featuretitle: PropTypes.string.isRequired,
  featurecontent: PropTypes.string.isRequired,
};

export default Feature;
