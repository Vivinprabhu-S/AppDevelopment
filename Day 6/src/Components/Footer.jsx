import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const nav = useNavigate();
    return (    
            <footer className="footer-container">
                <ul>
                    <li onClick={()=>nav('/terms-and-condition')}>Terms and Condition</li>
                    <li onClick={()=>nav('/privacy-policy')}>Privacy Policy</li>
                    <li>FAQ</li>
                </ul>
                        <p>&copy; {new Date().getFullYear()} HOMEAGAIN</p>
                <div className='footer-left'>
                    <ul>
                        <li onClick={()=>nav('/')}>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>   
                </div>
            </footer>
    )
}

export default Footer
