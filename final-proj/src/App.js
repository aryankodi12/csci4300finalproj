import './App.css';
import Intro from './components/intro_page/Intro.js';
import SignIn from './components/signin_page/SignIn';
import CreateAccount from './components/create_account_page/CreateAccount';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

<Router>
<div>
  <Routes>
    <Route exact path='/' element={<Intro />}/>
    <Route exact path='/sign-in' element={<SignIn />}/>
    <Route exact path='/create-account' element={<CreateAccount />}/>
  </Routes>
</div>
</Router>
  );
}

export default App;
