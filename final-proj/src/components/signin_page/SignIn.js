import './SignIn.css'
import React from 'react';
import Card from '../intro_page/Card.js'
import Heading from './Heading.js';
import FormSheet from './FormSheet.js'
import { Link } from 'react-router-dom';


const clickHandlerCreateAccount = () => {
    // setTitle('Updated!');
    // console.log(title);
    console.log("Button pressed to go create an account")
};
const clickHandlerNext = () => {
    // setTitle('Updated!');
    // console.log(title);
    console.log("Button pressed to login in")
};

function SignIn() {

    return (
        <div className='signin-card'>
            <Card className="signin-page">

                <Heading />

                <h1 className='title'>SIGN IN</h1>

                {/* <FormSheet /> */}
                <form className='user-input-form'>
                    {/* <label>Enter your name:
                        <input type="text" />
                    </label> */}
                    <input type="text" placeholder="Username" className='username'></input>
                    <input type="text" placeholder="Password" className='password'></input>
                    {/* <input type="submit" className='next-button'> NExt </input> */}
                    <button type="submit" className='next-button' onClick={clickHandlerNext}> NEXT</button>

                </form>

                {/* <button className="create-account-button" onClick={clickHandlerCreateAccount}>Create Account</button> */}

                <Link to="/create-account" className="create-account-button">Create Account</Link>

                

            </Card>
        </div>

    );


}

export default SignIn;