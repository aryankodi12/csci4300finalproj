// import './SignIn.css';
// import React, { useState } from 'react';
// import Card from '../intro_page/Card.js';
// import Heading from './Heading.js';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { signIn } from '../../backend/api';


// function SignIn() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:3000/sign-in', {
//                 username,
//                 password
//             });
//             console.log(response.data);
//             // Redirect the user to the home page
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <div className='signin-card'>
//             <Card className="signin-page">

//                 <Heading />

//                 <h1 className='title'>SIGN IN</h1>

//                 <form className='user-input-form' onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         placeholder="Username"
//                         className='username'
//                         value={username}
//                         onChange={(event) => setUsername(event.target.value)}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         className='password'
//                         value={password}
//                         onChange={(event) => setPassword(event.target.value)}
//                     />
//                     <button type="submit" className='next-button'>NEXT</button>
//                 </form>

//                 <Link to="/create-account" className="create-account-button">Create Account</Link>

//             </Card>
//         </div>

//     );
// }

// export default SignIn;

import './SignIn.css';
import React, { useState } from 'react';
import Card from './Card.js';
import Heading from './Heading.js';
import axios from 'axios';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/sign-in', {
        username,
        password,
      });
      console.log(response.data);
      // Set the user's attributes in some kind of state or context
      // You could use something like Redux or React Context for this
      // Here we're just passing them as query parameters to the home page URL
      const queryParams = new URLSearchParams({
        username: response.data.username,
        image: response.data.image,
        name: response.data.name,
        number: response.data.number,
        position: response.data.position,
        height: response.data.height,
        age: response.data.age,
        school: response.data.school,
      });
    } catch (error) {
      console.log(error);
      setErrorMessage('Invalid username or password');
    }
  };

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
          <button type="submit" className="next-button">
            NEXT
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </Card>
    </div>
  );
}

export default SignIn;
