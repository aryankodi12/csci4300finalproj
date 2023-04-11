import UserItem from './UserItem';
import './NavBar.css';

function NavBar(props) {
    return(
        <div classname ="contain">
            <img src="src/resources/4300_Logo" alt="Roster Ready Logo"/>
            <div></div>
            <UserItem id={props.id} name={props.name} image={props.image}/>
        </div>
    );
}
export default NavBar
