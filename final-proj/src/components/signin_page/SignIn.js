import './SignIn.css';
import React, { useState } from 'react';
import Card from '../intro_page/Card.js';
import Heading from './Heading.js';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/sign-in', {
                username,
                password
            });
            console.log(response.data);
            // Redirect the user to the home page
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='signin-card'>
            <Card className="signin-page">

                <Heading />

                <h1 className='title'>SIGN IN</h1>

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

                <Link to="/create-account" className="create-account-button">Create Account</Link>

            </Card>
        </div>

    );
}

export default SignIn;
