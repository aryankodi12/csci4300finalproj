import NavBar from './Components/NavBar';
import StatHead from './Components/StatHead';
import Rosters from './Components/Rosters'
import './App.css';
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

  const userLog = [
    {
      id: 'u1',
      name: 'Obi Wan',
      image:
        'https://i.kym-cdn.com/photos/images/original/001/701/634/8ef.jpg'
    }
  ]
  
  return (
    <div>
      <div className = "navBar">
        <NavBar user_inst={userLog}/>
      </div>
      <StatHead/>
      <Roster players={players} onEdit={setEditingPlayer} onDelete={handleDeletePlayer} />
      <PlayerForm onSubmit={handleAddPlayer} player={editingPlayer} onDelete={() => setShowMessage(true)} onEdit={handleEditPlayer} />
    
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



