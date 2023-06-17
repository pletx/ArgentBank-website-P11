import React from 'react';
import PropTypes from 'prop-types';
import './feature.css';

function feature(props) {
  return (<div className="feature-item">
    <img src={props.icon} alt={props.iconalt} className="feature-icon" />
    <h3 className="feature-item-title">{props.featuretitle}</h3>
    <p>
      {props.featurecontent}
    </p>
  </div>);
}

export default feature;