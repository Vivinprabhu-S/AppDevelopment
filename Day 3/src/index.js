import React from 'react';
import ReactDOM from 'react-dom/client';

import Login from './Components/Login';
import Signup from './Components/Signup';

import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

export default function RouteApp(){
    return(
      <React.StrictMode>
          <Router>
              <Routes>
                  <Route path="/" element={<Login/>}></Route>
                  <Route path="/signup" element={<Signup/>}></Route>
              </Routes>
          </Router>
        </React.StrictMode>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteApp/>);