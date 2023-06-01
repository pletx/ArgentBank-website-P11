import React from "react";
import Account from "../../components/Account/account";
import './user.css'
function user(){
    return(
        <section id='user'>
        <main class="main bg-dark">
            <div class="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button class="edit-button">Edit Name</button>
      </div>
      <h2 class="sr-only">Accounts</h2>
        <Account accounttitle='Argent Bank Checking (x8349)'
        accountamount='$2,082.79'
        accountdescription='Available Balance'

        />
        <Account accounttitle='Argent Bank Savings (x6712)'
        accountamount='$10,928.42'
        accountdescription='Available Balance'

        />
        <Account accounttitle='Argent Bank Credit Card (x8349)'
        accountamount='$184.30'
        accountdescription='Current Balance'
        />
        </main>
        </section>
    )
} 
export default user;