import NavBar from './Components/NavBar';
import './App.css';

function App() {
  const userLog = [
    {
      id: 'u1',
      name: 'Obi Wan',
      image:
        'https://i.kym-cdn.com/photos/images/original/001/701/634/8ef.jpg'
    }
  ]
  
  return (
    <div>
      <div className = "navBar">
        <NavBar user_inst={userLog}/>
      </div>
      <div className = "StatHeader">
        <div className= "curveR"></div>
        <h4>Player Name</h4>
        <h4>Position</h4>
        <h4>Height</h4>
        <h4>Age</h4>
        <h4>School</h4>
        <div className= "curveL"></div>
      </div>
    </div>
  );
}

export default App;
