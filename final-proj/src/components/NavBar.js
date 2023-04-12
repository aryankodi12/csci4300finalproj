import Users from './Users';
import './NavBar.css';


function NavBar(props) {
    // const imgsrc = 'https://imgur.com/a/CUGHZIx'
    return(
        <div className ="wrap">
            <img className = "logo" src='https://i.imgur.com/xo4qwfm.png' alt="Roster Ready Logo"/>
            <Users user_list={props.user_inst}/>
        </div>
    );
}
export default NavBar
