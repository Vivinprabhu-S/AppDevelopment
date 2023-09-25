import { useState } from "react";
import {useNavigate} from "react-router-dom";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../Assests/css/Appendfamily.css';

function Appendfamily()
{
    const [formData , setFormData] = useState({
        familymembername: "",
        familycount: "",
        password: "",
        contact:""
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

    const navigateToDashboard = useNavigate();

    const handleClickDashboard=()=>{
        navigateToDashboard('/owner-homepage');
    }

    return(
        <div className="appendhome-background">
        <Navbar />
        <Sidebar />
            <div className="append-container">
                <form onSubmit={handleSubmit}>
                    <div className="append-icon"><i class='bx bx-group' ></i></div>

                    <div className="login-text">APPEND NEW FAMILY</div>
                    <input className="common-input-field" type="text" placeholder="Home ID" name="homeid" onChange={handleOnChange}/> 
                    <input className="common-input-field" type="text" placeholder="Family Head name" name="familymembername" onChange={handleOnChange}/> 
                    <input className="common-input-field" type="number" placeholder="Family count" name="familycount" onChange={handleOnChange}/> 
                    <input className="common-input-field" type="password" placeholder="Give Password" name="password" onChange={handleOnChange}/>
                    <input className="common-input-field" type="text" placeholder="Contact" name="contact" onChange={handleOnChange}/> 
                    <button className="common-button" type="submit" onClick={handleClickDashboard}>Append</button>
                </form>
            </div>
        </div>
    );
}

export default Appendfamily;