import React, { useState } from 'react';
import './Login.css';
import propTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({setToken}) {

    

    const [Username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          Username,
          password
        });
        setToken(token);
      }

return( <React.Fragment>
      <div className="login-wrapper"></div>
      <h1 className="baba">Log In Page for Volunteers</h1>
    <form onSubmit={handleSubmit}>
      <label>
        <p className="baba">Username</p>
        <input type="text" onChange={e=>setUserName(e.target.value)} />
      </label>
      <label>
        <p className="baba">Password</p>
        <input type="password" onChange={e=>setPassword(e.target.value)} />
      </label>
      <div>
        <button type="submit" className="baba">Submit</button>
      </div>
    </form>
    </React.Fragment>   
  )
}

Login.propTypes = {
    setToken: propTypes.func.isRequired
}