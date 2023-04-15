import Users from './Users';
import './NavBar.css';


function NavBar(props) {
    return(
        <div className ="wrap">
            <div className="curve"></div> 
            <div className="inner">
            <img className = "logo" src='https://i.imgur.com/xo4qwfm.png' alt="Roster Ready Logo"/>
            <Users user_list={props.user_inst}/>
            </div>
        </div>
    );
}
export default NavBar
