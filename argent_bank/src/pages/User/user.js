import React, { useState,useEffect} from "react";
import Account from "../../components/Account/account";
import './user.css'
import { editname,Getuserdata} from "../../services/Api_services";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../reducers';
function User() {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const userConnected = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEditName = () => {
    setIsEditing(true);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if(localStorage.getItem('token')!== undefined && localStorage.getItem('token')!== null)
      { const response = await editname(newName,true);
        const userData=await Getuserdata(true);
        dispatch(await loginSuccess(userData.body));}

      if(sessionStorage.getItem('token')!== undefined && sessionStorage.getItem('token')!== null)
      {const response = await editname(newName,false);
      const userData=await Getuserdata(false);
      dispatch(await loginSuccess(userData.body));}
    } catch (error) {
      console.error('Error submitting new name:', error);
    }
    setIsEditing(false);
    
    navigate('/user')
  };
  const tokenCheck = async (rememberme) => {
    const checkResponse = await Getuserdata(rememberme);
    console.log('checkResponse',checkResponse,rememberme)
    if(checkResponse){
      console.log('autoconnec ? avec ',checkResponse.body)
      dispatch(await loginSuccess(checkResponse.body))
    return true}
    else{return false}
  };
 useEffect(() => {
    if (!userConnected) {
           navigate('/login');}
    else {
      navigate('/user');
  }}, [userConnected, navigate]);

    if (userConnected!==null && userConnected!==undefined){
      return (
        <div id='user'>
          <main className="main bg-dark">
            <div className="header">
              <h1>Welcome back<br />{userConnected.firstName}</h1>
              {isEditing ? (
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={newName}
                    onChange={(event) => setNewName(event.target.value)}
                  />
                  <button type="submit">Submit</button>
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
}


export default User;
