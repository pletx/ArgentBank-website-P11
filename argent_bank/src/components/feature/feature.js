import React from 'react';
import PropTypes from 'prop-types';
import './feature.css';
function feature(props) {
  return (<div class="feature-item">
  <img src={props.icon} alt={props.iconalt} class="feature-icon"/>
  <h3 class="feature-item-title">{props.featuretitle}</h3>
  <p>
    {props.featurecontent}
  </p>
</div>);
}
export default feature;