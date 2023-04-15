import RosterItem from './RosterItem';

function Rosters(props) {
    return (
        <div>
        {props.roster_list.map((i)=>{
            return (
            <RosterItem age={i.age} name={i.name} image={i.image} height={i.height} school={i.school} position={i.position} number={i.number}/>
          );})}
          </div>
    );
    
 }
  export default Rosters