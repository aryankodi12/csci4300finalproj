import React from 'react';
import RosterItem from './RosterItem';
import './Roster.css';

function Roster({ players, onEdit, onDelete }) {
  return (
    <div>
      {players.map((player) => (
        <div className="ButtonWrap" key={player._id}>
           <RosterItem age={player.age} name={player.name} number={player.number} image={player.picture} height={player.height} school={player.college} position={player.position}/>
           <div className="StackButton">
              <button className= "edB" onClick={() => onEdit(player)}>Edit</button>
              <button className= "delB" onClick={() => onDelete(player._id)}>Delete</button>
           </div>
        </div>
      ))}
    </div>
  );
}

export default Roster;
