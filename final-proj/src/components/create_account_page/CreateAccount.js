import './CreateAccount.css';
import React, { useState } from 'react';
import Card from './Card.js';
import Heading from './Heading.js';
import axios from 'axios';



function CreateAccount () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:8082/api/back/create-account', {
            username,
            password,
            image: '',
            name: '',
            number: '',
            position: '',
            height: '',
            age: '',
            school: '',
          });
          console.log(response.data);
          // Redirect the user to the home page
          window.location.href = '/sign-in';
        } catch (error) {
          console.log(error);
        }
      };
      

    return (
        <div className='createaccount-card'>
            <Card className="createaccount-page">
                <Heading />
                <h1 className='title'>Create Account</h1>
                <form className='user-input-form' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        className='username'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className='password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button type="submit" className='next-button'>NEXT</button>
                </form>
            </Card>
        </div>
    );
}

export default CreateAccount;


