import './HomePage.css';
import PlayerForm from './PlayerForm';
import Roster from './Roster';
import EditPlayer from './EditPlayer';
import DeletePlayer from './DeletePlayer';
import NavBar from './NavBar';
import StatHead from './StatHead';
import Rosters from './Rosters';
import React, { useState } from 'react';

function HomePage () {
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
        <div className="wrapper">
            <div className="NavBar">
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

export default HomePage