import './App.css';
import Intro from './components/intro_page/Intro.js';
import SignIn from './components/signin_page/SignIn';
import CreateAccount from './components/create_account_page/CreateAccount';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
// import ErrorPage from

function App() {
  return (

<Router>
<div>
  <Routes>
    <Route exact path='/' element={<Intro />}/>
    <Route exact path='/sign-in' element={<SignIn />}/>
    <Route exact path='/create-account' element={<CreateAccount />}/>
    {/* <Route exact path='*' element={}/> */}
  </Routes>
</div>
</Router>
  );
}

export default App;
