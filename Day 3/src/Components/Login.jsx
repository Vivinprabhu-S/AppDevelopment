import { useState } from "react";
import { Link } from "react-router-dom";
import '../Assests/css/style.css';

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

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
    }

    return(

        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div className="login-text">WELCOME BACK !</div>
                <input className="common-input-field" type="email" placeholder="Enter Email" name="email" onChange={(handleOnChange)}/> 
                <input className="common-input-field" type="password" placeholder="Enter Password" name="password" onChange={handleOnChange}/>
                <div className="forgot-pass-login">Forgot Password?</div>
                <button className="common-button" type="submit">Login</button>
                <div className="not-a-member">Not a member?</div>

                <Link to="/signup">
                    <button className="common-button">Signup</button>
                </Link>  
            </form>
        </div>
    );
}

export default Login;