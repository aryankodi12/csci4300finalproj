import './Intro.css';
// import * as React from 'react';
// import IntroCard from './IntroCard.js';
import Card from './Card.js';
// final_project/src/components/Card.js
import logo from './basketball-gc41659d70_640.png';
import { Link } from "react-router-dom"

const clickHandler = () => {
  // setTitle('Updated!');
  // console.log(title);
  console.log("Button pressed to login in")
};

function Intro () {

  return (
            // <IntroCard />
    <div className="intro-card">

      <Card className="intro-page">
        <div>
          <h2 className="intro-title">GROUP R</h2>
          <h4 className="intro-slogan">CREATE YOUR DREAM BASKETBALL TEAM</h4>
          <img className="intro-image" src="https://i.imgur.com/xo4qwfm.png" alt="image of logo"/>

          {/* <button className="intro-sign-in" onClick={clickHandler}>Sign In</button> */}
         
          <Link to="/sign-in" className="intro-sign-in">Sign In</Link>

          {/* <a className="intro-guest-link" href="">Continue as Guest</a> */}

          <Link to="/create-account" className="intro-create-account-link">Create Account</Link>

        </div>

      </Card>
    </div>
  );
}

export default Intro;
