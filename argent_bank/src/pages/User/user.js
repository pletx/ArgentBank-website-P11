import React from "react";
import Account from "../../components/Account/account";
import './user.css'
import { getuserdata } from "../../services/Api_services";
function User() {
    return (
        <div id='user'>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
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
        </div>
    )
}

export default User;
