import React from 'react';
import ReactDOM from 'react-dom/client';

import Login from './Components/Login';
import Signup from './Components/Signup';
import UserDashboard from './Components/UserDashboard';
import Appendhome from './Components/Appendhome';

import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Provider } from 'react-redux';
import Store from './Redux/Store';

export default function RouteApp(){
    return(
      <React.StrictMode>
        <Provider store={Store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/signup" element={<Signup/>}></Route>
                    <Route path="/dashboard" element={<UserDashboard/>}></Route>
                    <Route path="/appendhome" element={<Appendhome/>}></Route>
                </Routes>
            </Router>
            </Provider>
        </React.StrictMode>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteApp/>);