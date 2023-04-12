import NavBar from './Components/NavBar';
import StatHead from './Components/StatHead';
import Rosters from './Components/Rosters'
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

  const dummyPlayer = [
    {
      name: 'Trae Young',
      position: 'G',
      height: '6\'1"',
      age: '24',
      image: 'https://secure.gravatar.com/avatar/15f8001624bd5b624aa2c00d0d25b1f4?s=168&d=mm&r=g',
      school: 'University of Oklahoma'
    }
  ]
  
  return (
    <div>
      <div className = "navBar">
        <NavBar user_inst={userLog}/>
      </div>
      <StatHead/>
      <div className = "RosterSlots">
        <Rosters roster_list={dummyPlayer}/>
      </div>
    </div>
  );
}

export default App;
