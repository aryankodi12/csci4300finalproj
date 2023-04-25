import './UserItem.css';
import Card from './Card';
import { Link } from 'react-router-dom';

function UserItem(props){
return (
    <div>
    <Card className='user-item'>
        {/* <img src= {props.image} alt={props.name} className='user-class-img'/> */}
        <div className="uWrap">
          <h2 className='user-class-name'> {props.name}</h2>
          <Link to="/sign-in" className="log-out">Log Out</Link>
        </div>
    </Card>
    </div>
  );
}

export default UserItem;