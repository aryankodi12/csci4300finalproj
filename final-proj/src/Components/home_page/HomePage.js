import './HomePage.css';
import PlayerForm from './PlayerForm';
import Roster from './Roster';
import EditPlayer from './EditPlayer';
import DeletePlayer from './DeletePlayer';
import NavBar from './NavBar';
import StatHead from './StatHead';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage () {
    const [players, setPlayers] = useState([]);
    const [editingPlayer, setEditingPlayer] = useState(null);
    const [showMessage, setShowMessage] = useState(false);
    const [playerRoster, setPlayerRoster] = useState([]);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    // Read this from the url using searchParams or Query params
    // const currentUserId = '644568963abe684d85a4eb71';    
    // const currentUserId = null;
    const currentUserId = urlParams.get('userId');
    
    useEffect(() => {
        const getRoster = async () => {

            if ( !currentUserId )
                return;
            const token = localStorage.getItem('token'); // Retrieve authentication token from local storage
            console.log(token); // Log the token value
            const players = await axios.get(`http://localhost:8082/api/back/player-roster?userId=${currentUserId}`, {
              headers: {
                Authorization: `Bearer ${token}`, // Set authentication token in headers
              },
            }).then ((playerRoster) => {
                setPlayerRoster(playerRoster?.data || []);
            }).catch( (error ) => {
                console.log(error);
            });
        };

        getRoster();
    
    }, currentUserId);
    


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


            <Roster players={playerRoster} onEdit={setEditingPlayer} onDelete={handleDeletePlayer} />
            
            <PlayerForm onSubmit={handleAddPlayer} player={editingPlayer} onDelete={() => setShowMessage(true)} onEdit={handleEditPlayer} />
            
            {editingPlayer && (
              <div className="formsWrapper">
                <PlayerForm onSubmit={handleSavePlayer} player={editingPlayer} onDelete={() => setShowMessage(true)} onEdit={handleEditPlayer} />
                <EditPlayer player={editingPlayer} onSubmit={handleSavePlayer} onDelete={() => setShowMessage(true)} />
              </div>
            )}
        </div>
    );
}

export default HomePage;
