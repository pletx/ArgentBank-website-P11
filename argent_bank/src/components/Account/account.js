import React from 'react';
import PropTypes from 'prop-types';
import './account.css';

function Account(props) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{props.accounttitle}</h3>
        <p className="account-amount">{props.accountamount}</p>
        <p className="account-amount-description">{props.accountdescription}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

Account.propTypes = {
  accounttitle: PropTypes.string.isRequired,
  accountamount: PropTypes.string.isRequired,
  accountdescription: PropTypes.string.isRequired,
};

export default Account;
