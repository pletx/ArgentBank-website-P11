import React from 'react';
import PropTypes from 'prop-types';
import './account.css'
function account(props) {
  return (<section class="account">
  <div class="account-content-wrapper">
    <h3 class="account-title">{props.accounttitle}</h3>
    <p class="account-amount">{props.accountamount}</p>
    <p class="account-amount-description">{props.accountdescription}</p>
  </div>
  <div class="account-content-wrapper cta">
    <button class="transaction-button">View transactions</button>
  </div>
</section>);
}
export default account;