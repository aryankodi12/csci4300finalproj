import React from 'react';

function Roster({ players, onEdit, onDelete }) {
  return (
    <div>
      <h2>Player Roster</h2>
      {players.map((player) => (
        <div key={player.id}>
          <h3>{player.name}</h3>
          <p>Number: {player.number}</p>
          <p>College: {player.college}</p>
          <p>Height: {player.height}</p>
          <p>Age: {player.age}</p>
          <img src={player.picture} alt={player.name} />
          <p>Position: {player.position}</p>
          <button onClick={() => onEdit(player)}>Edit</button>
          <button onClick={() => onDelete(player.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Roster;
