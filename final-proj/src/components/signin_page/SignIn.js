import './SignIn.css';
import React, { useState } from 'react';
import Card from './Card.js';
import Heading from './Heading.js';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [ loggedInUser, setLoggedInUser] = useState({});
  
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8082/api/back/sign-in', {
        username,
        password,
      });
      if (response.status === 200) {
        const userData = response.data;
        localStorage.setItem('token', userData.token);
        console.log(userData.token);
        window.location.href = `/home?userId=${userData.user.id}`; // Redirect to home page with userId query parameter
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.log(error);
      setErrorMessage('Invalid Username/Password');
    }
  };


//-----------------
const navigate = useNavigate();

const navigateToCreateAccount = () => {
  navigate('/create-account');
};
//-----------------


  return (
    <div className="signin-card">
      <Card className="signin-page">
        <Heading />
        <h1 className="title">Sign In</h1>
        <form className="user-input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div class="app-panel">
            <button type="submit" className="app-button">
              SIGN-IN
            </button>
            <button type="button" className="app-button" onClick={navigateToCreateAccount}>
              REGISTER
            </button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </Card>
    </div>
  );
}

export default SignIn;
