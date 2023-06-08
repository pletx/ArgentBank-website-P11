import React from "react";
import Form from "../../components/Form/Form";
import './signin.css'
function Sign_in(){
    
    return(
    <div id="Sign-in">
    <main class="main bg-dark">
    <section class="sign-in-content">
    <i class="fa fa-user-circle sign-in-icon"></i>
    <h1>Sign In</h1>
    <Form/>
    </section>
    </main>
    </div>)
} 

export default Sign_in;