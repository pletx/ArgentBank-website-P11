import React, { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import { useDispatch, useSelector } from 'react-redux';
import './signin.css'
import { fetchlogin,Getuserdata } from "../../services/Api_services";
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../reducers';
function Sign_in(){
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userConnected = useSelector(state => state.user);
    const handleSubmit = async (email, password,rememberme)  => {
        console.log(email,password,rememberme)
        try {
          const response = await fetchlogin(email, password,rememberme);
          if (response) {
            const userData=await Getuserdata(rememberme);
            dispatch(await loginSuccess(userData));
            
          } else {
            setErrorMessage("Invalid email or password");  }
        } catch (error) {
          console.error('Error Login:', error);
        }
      };  
      const autoConnect = async (rememberme) => {
        const userData=await Getuserdata(rememberme);
          if(userData){
            dispatch(await loginSuccess(userData))
          }
          }
        if(userConnected===null || userConnected===undefined ){
          if(localStorage.getItem('token')!== undefined && localStorage.getItem('token')!== null) 
              {autoConnect(true)}
          if (sessionStorage.getItem('token')!==undefined && sessionStorage.getItem('token')!== null)
            {autoConnect(false)}
        }
        useEffect(() => {
          if (userConnected!==null) {
            navigate('/user');
          }
        }, [userConnected, navigate]);
      
    return(
    <div id="Sign-in">
    <main class="main bg-dark">
    <section class="sign-in-content">
    <i class="fa fa-user-circle sign-in-icon"></i>
    <h1>Login</h1>
    <Form onFormSubmit={handleSubmit} />
    </section>
    </main>
    </div>)
} 

export default Sign_in;