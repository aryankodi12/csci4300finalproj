import logo from './logo.svg';
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
        <NavBar userLog/>
      </div>
    </div>
  );
}

export default App;
