import './App.css';
import Intro from './Components/intro_page/Intro.js';
import SignIn from './Components/signin_page/SignIn';
import CreateAccount from './Components/create_account_page/CreateAccount';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import ErrorPage from './Components/error_page/ErrorPage.js'
import HomePage from './Components/home_page/HomePage'
import './App.css';
import React, { useState } from 'react';




function App() {

  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };
  
  
  return (
    <Router>
         <div>
          <Routes>
            <Route exact path='/' element={<Intro />}/>
            <Route exact path='/sign-in' element={<SignIn />}/>
            <Route exact path='/create-account' element={<CreateAccount />}/>
            <Route exact path='*' element={<ErrorPage />}/>
            <Route exact path='/home' element={<HomePage currentUser={currentUser}/>}/> 
          </Routes>
        </div>
      </Router>

      

  );
}

export default App;



