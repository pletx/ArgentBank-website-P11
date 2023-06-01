import React from 'react';
import './footer.css';
import PropTypes from 'prop-types';

function footer(props) {
  return (
    <footer className="footer">
        <p>{props.footertxt}</p>
    </footer>
  );
}
footer.propTypes = {
  footertxt:PropTypes.string,
}
export default footer;