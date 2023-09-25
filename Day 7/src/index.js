import React from 'react';
import ReactDOM from 'react-dom/client';

import Landingpage from './Components/Landingpage';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Signup from './Components/Signup';
import OwnerDashboard from './Components/OwnerDashboard';

import LoginFamily from './Components/LoginFamily';
import Userfamilyhomepage from './Components/Userfamilyhomepage';

import TermsAndCondition from './Components/TermsAndCondition';
import PrivacyPolicy from './Components/PrivacyPolicy';
import FAQ from './Components/FAQ';

import { Provider } from 'react-redux';
import Store from './Redux/Store';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



export default function RouteApp() {
    return (
        <React.StrictMode>
            <Provider store={Store}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Landingpage />}></Route>
                        <Route path="/footer" element={<Footer />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/signup" element={<Signup />}></Route>
                        <Route path="/owner-dashboard" element={<OwnerDashboard />}></Route>

                        <Route path="/login-family" element={<LoginFamily/>}></Route>
                        <Route path="/user-family-homepage" element={<Userfamilyhomepage/>}></Route>

                        <Route path="/terms-and-condition" element={<TermsAndCondition />}></Route>
                        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
                        <Route path="/faq" element={<FAQ />}></Route>
                    </Routes>
                </Router>
            </Provider>
        </React.StrictMode>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteApp />);