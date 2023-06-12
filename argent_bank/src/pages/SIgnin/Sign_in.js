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
    const handleSubmit = async (email, password)  => {
        console.log(email,password)
        try {
          const response = await fetchlogin(email, password);
          if (response) {
            const userData=await Getuserdata();
            dispatch(await loginSuccess(userData));
            
          } else {
            setErrorMessage("Invalid email or password");  }
        } catch (error) {
          console.error('Error Login:', error);
        }
      };  
      useEffect(() => {
        if (userConnected !== null && userConnected !== undefined) {
          navigate('/user');
        }
      }, [userConnected, navigate]);
    return(
    <div id="Sign-in">
    <main class="main bg-dark">
    <section class="sign-in-content">
    <i class="fa fa-user-circle sign-in-icon"></i>
    <h1>Sign In</h1>
    <Form onFormSubmit={handleSubmit} />
    </section>
    </main>
    </div>)
} 

export default Sign_in;