import React, { useState } from 'react';
import PlayerForm from './Components/PlayerForm';
import Roster from './Components/Roster';
import EditPlayer from './Components/EditPlayer';
import DeletePlayer from './Components/DeletePlayer';

function App() {
  const [players, setPlayers] = useState([]);
  const [editingPlayer, setEditingPlayer] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleAddPlayer = (player) => {
    setPlayers([...players, { id: Date.now(), ...player }]);
  };

  const handleEditPlayer = (player) => {
    setEditingPlayer(player);
  };

  const handleSavePlayer = (updatedPlayer) => {
    const updatedPlayers = players.map((player) => {
      if (player.id === updatedPlayer.id) {
        return updatedPlayer;
      }
      return player;
    });
    setPlayers(updatedPlayers);
    setEditingPlayer(null);
  };

  const handleDeletePlayer = (id) => {
    const updatedPlayers = players.filter((player) => player.id !== id);
    setPlayers(updatedPlayers);
    setShowMessage(true);
  };

  return (
    <div>
      <h1>Player Roster App</h1>
      <PlayerForm onSubmit={handleAddPlayer} player={editingPlayer} onDelete={() => setShowMessage(true)} onEdit={handleEditPlayer} />
      <Roster players={players} onEdit={setEditingPlayer} onDelete={handleDeletePlayer} />
      {editingPlayer && (
        <EditPlayer
          player={editingPlayer}
          onSubmit={handleSavePlayer}
          onDelete={() => setShowMessage(true)}
        />
      )}
    </div>
  );
}

export default App;



