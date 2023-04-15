import './CreateAccount.css';
import React from 'react';
import Card from './Card.js';
import Heading from './Heading.js';
import { Link } from 'react-router-dom';

const clickHandler = () => {
    // setTitle('Updated!');
    // console.log(title);
    console.log("Button pressed to login in")
  };

function CreateAccount () {
    return (
        <div className='createaccount-card'>
            <Card className="createaccount-page">

                <Heading />


                <h1 className='title'>Create Account</h1>


                <form className='user-input-form'>

                    <input type="text" placeholder="Username" className='username'></input>
                    <input type="text" placeholder="Password" className='password'></input>
                   
                    {/* <button type="submit" className='next-button'> NEXT</button> */}

                </form>

                {/* <button className="create-account-button" onClick={clickHandler}>Create Account</button> */}

                <Link to="/home" className="create-account-button">Create Account</Link>


            </Card>
        </div>

    );
}

export default CreateAccount;