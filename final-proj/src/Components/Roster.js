import React from 'react';
import RosterItem from './RosterItem';

function Roster({ players, onEdit, onDelete }) {
  return (
    <div>
      {players.map((player) => (
        <div key={player.id}>
           <RosterItem age={player.age} name={player.name} number={player.number} image={player.picture} height={player.height} school={player.college} position={player.position}/>
          <button onClick={() => onEdit(player)}>Edit</button>
          <button onClick={() => onDelete(player.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Roster;
