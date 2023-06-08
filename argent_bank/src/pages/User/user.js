import React, { useState } from "react";
import Account from "../../components/Account/account";
import './user.css'
import { editname } from "../../services/Api_services";

function User() {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");

  const handleEditName = () => {
    setIsEditing(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try { const response = await editname(newName);
      console.log(response)
    } catch (error) {
      console.error('Error submitting new name:', error);
    }

    setIsEditing(false);
  };

  return (
    <div id='user'>
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />Tony Jarvis!</h1>
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={newName}
                onChange={(event) => setNewName(event.target.value)}
              />
              <button type="submit">Save</button>
            </form>
          ) : (
            <button className="edit-button" onClick={handleEditName}>Edit Name</button>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          accounttitle='Argent Bank Checking (x8349)'
          accountamount='$2,082.79'
          accountdescription='Available Balance'
        />
        <Account
          accounttitle='Argent Bank Savings (x6712)'
          accountamount='$10,928.42'
          accountdescription='Available Balance'
        />
        <Account
          accounttitle='Argent Bank Credit Card (x8349)'
          accountamount='$184.30'
          accountdescription='Current Balance'
        />
      </main>
    </div>
  );
}

export default User;
