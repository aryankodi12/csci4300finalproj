import './RosterItem.css';

function RosterItem(props){
return (
    <div className="StatBlock">
        <img src= {props.image} alt={props.name} className='Roster-class-img'/>
        <h3 className='Roster-class-name'> {props.name}</h3>
        <h3>{props.position}</h3>
        <h3>{props.height}</h3>
        <h3>{props.age}</h3>
        <h3>{props.school}</h3>
    </div>
  );
}

export default RosterItem;