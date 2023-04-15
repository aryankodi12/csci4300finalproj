import './UserItem.css';
import Card from './Card';

function UserItem(props){
return (
    <div>
    <Card className='user-item'>
        <img src= {props.image} alt={props.name} className='user-class-img'/>
        <h2 className='user-class-name'> {props.name}</h2>
    </Card>
    </div>
  );
}

export default UserItem;