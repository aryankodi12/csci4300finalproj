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
      <div classname = "navBar">
        <NavBar user_inst={userLog}/>
      </div>
    </div>
  );
}

export default App;
