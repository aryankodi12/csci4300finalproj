import './RosterItem.css';

function RosterItem(props){
return (
    <div className="StatBlock">
        <img src= {props.image} alt={props.name} className='Roster-class-img'/>
        <h3 className='Roster-class-name'> {props.name}</h3>
        <h3 className="num">{props.number}</h3>
        <h3 className="pos">{props.position}</h3>
        <h3 className="hei">{props.height}</h3>
        <h3 className="age">{props.age}</h3>
        <h3 className="school">{props.school}</h3>
 
    </div>
  );
}

export default RosterItem;