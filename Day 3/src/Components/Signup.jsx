import { useState } from "react";
import { Link } from "react-router-dom";
import '../Assests/css/style.css';

function Signup()
{
    const [formData,setFormData] = useState(
        {
            username:"" ,
            email:"",
            contact:"",
            password:"",
            confirmpassword:"",
            location:""
        }
    );


    const handleOnChange = (e) =>{
        const {name,value} = e.target;
        setFormData(
            {
               ...formData,
               [name]:value
            }
        )
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData)
    }

    return(
    <div className="signup-container">       
        <form onSubmit={(handleSubmit)}>
            <div className="signup-text">CREATE A NEW ACCOUNT</div>   
            <input className="common-input-field" type="text" placeholder="Username" name="username" onChange={(handleOnChange)}/>
            <input className="common-input-field" type="email" placeholder="Email" name="email" onChange={(handleOnChange)}/>
            <input className="common-input-field" type="text" placeholder="Mobile Number" name="contact" onChange={(handleOnChange)}/>
            <input className="common-input-field" type="password" placeholder="Password" name="password" onChange={(handleOnChange)}/>
            <input className="common-input-field" type="password" placeholder="Confirm Password" name="confirmpassword" onChange={(handleOnChange)}/>
            <input className="common-input-field" type="text" placeholder="Location" name="loction" onChange={(handleOnChange)}/>
            <button className="common-button">Signup</button>
            <Link to="/"><div className="already-have-account">ALREADY HAVE AN ACCOUNT</div></Link>
        </form>
    </div>
    );
}

export default Signup;