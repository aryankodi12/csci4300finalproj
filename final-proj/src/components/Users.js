import UserItem from './UserItem';
import './Users.css';

function Users(props) {
    return (
        <div>
        {props.user_list.map((i)=>{
            return (
            <UserItem id={i.id} name={i.name} image={i.image}/>
          );})}
          </div>
    );
    
 }
  export default Users