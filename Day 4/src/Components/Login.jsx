import { useState } from "react";
import {useNavigate} from "react-router-dom";
import '../Assests/css/style.css';

import { useDispatch } from "react-redux";
import { login } from "../Redux/UserSlice";

function Login()
{
    const [formData , setFormData] = useState({
        email: "",
        password: ""
    });

    const handleOnChange = (e) =>{
        const{name , value} = e.target;
        setFormData({
            ...formData,
            [name] : value 
        })
    }
    
    const dispatch = useDispatch();
    
    const navigateToDashboard = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);

        dispatch(login(
            {
                name:formData.email,
                loggedIn:true
            }
        ));
        navigateToDashboard('/dashboard');
    }

    const navigateToSignup = useNavigate();

    const handleClick = () =>{
        navigateToSignup('/signup');
    }

    

    return(
        <div className="login-background">
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <div className="login-text">WELCOME BACK !</div>
                    <input className="common-input-field" type="email" placeholder="Enter Email" name="email" onChange={handleOnChange}/> 
                    <input className="common-input-field" type="password" placeholder="Enter Password" name="password" onChange={handleOnChange}/>
                    <button className="common-button" type="submit">Login</button>
                    <div className="forgot-pass-login">Forgot Password?</div>
                    <div className="not-a-member">NOT A MEMBER? <span style={{color:'blue',cursor:'pointer'}} onClick={handleClick}>Register Here</span> </div>
                </form>
            </div>
        </div>
    );
}

export default Login;