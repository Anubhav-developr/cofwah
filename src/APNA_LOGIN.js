import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import { Route, Router, Switch } from 'react-router-dom';
import "./pages/CSS_ke_log/LOGIN_WALA.css"
import Login from './components/Login/Login';




export default function APNA_LOGIN() {
    const [token, setToken] = useState();
    if(!token){
        return <Login setToken={setToken} />

    }
  return(
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  
  );
}