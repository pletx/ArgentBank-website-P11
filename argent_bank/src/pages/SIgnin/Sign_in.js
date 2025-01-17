import React, { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import { useDispatch, useSelector } from 'react-redux';
import './signin.css'
import { fetchlogin, Getuserdata } from "../../services/Api_services";
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../reducers';

function Sign_in() {
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userConnected = useSelector(state => state.user);

  const handleSubmit = async (email, password, rememberme) => {
    console.log(email, password, rememberme);
    try {
      const response = await fetchlogin(email, password, rememberme);
      console.log('fetchlogin', response);
      if (response) {
        const userData = await Getuserdata(rememberme);
        console.log('userData', userData.body);
        dispatch(await loginSuccess(userData.body));
      } else {
        setErrorMessage("Invalid email or password");
      }
    } catch (error) {
      console.error('Error Login:', error);
    }
  };

  const tokenCheck = async (rememberme) => {
    const checkResponse = await Getuserdata(rememberme);
    console.log('checkResponse', checkResponse, rememberme);
    if (checkResponse.status === 200) {
      console.log('autoconnec ? avec ', checkResponse.body);
      dispatch(await loginSuccess(checkResponse.body));
      navigate('/profile')
    }
  };

  useEffect(() => {
    if (!userConnected) {
      if(sessionStorage.getItem('token')) {
        tokenCheck(false);}

      if(localStorage.getItem('token')) {
        tokenCheck(true);}
        
      else {
        console.log('aucun token', userConnected);
        navigate('/login');
        
      }
    }
    else {
      navigate('/profile');
    }
  }, [userConnected]);

  return (<>
    {!userConnected && 
    <div id="Sign-in">
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Login</h1>
          <Form onFormSubmit={handleSubmit} errorMessage={errorMessage} />
        </section>
      </main>
    </div>}</>
  );
}


export default Sign_in;
