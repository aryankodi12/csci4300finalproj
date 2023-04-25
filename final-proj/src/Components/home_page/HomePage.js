import './HomePage.css';
import PlayerForm from './PlayerForm';
import Roster from './Roster';
import EditPlayer from './EditPlayer';
import NavBar from './NavBar';
import StatHead from './StatHead';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8082/api/back'


function HomePage () {
    const [players, setPlayers] = useState([]);
    // const [playerRoster, setPlayerRoster] = useState([]);


    const [editingPlayer, setEditingPlayer] = useState(null);
    const [showMessage, setShowMessage] = useState(false);
    

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    // Read this from the url using searchParams or Query params
    // const currentUserId = '644568963abe684d85a4eb71';    
    // const currentUserId = null;
    const currentUserId = urlParams.get('userId');
    
    const getRoster = async () => {

        if ( !currentUserId )
            return;
        const token = localStorage.getItem('token'); // Retrieve authentication token from local storage
        console.log(token); // Log the token value
        const players = await axios.get(`${API_BASE_URL}/player-roster?userId=${currentUserId}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Set authentication token in headers
          },
        }).then ((rosterResponse) => {
            setPlayers(rosterResponse?.data || []);
        }).catch( (error ) => {
            console.log(error);
        });
    };
    useEffect(() => {
        getRoster();
    }, currentUserId);
    
    

    const handleAddPlayer = (player) => {
       // setPlayers([...players, { id: Date.now(), ...player }]);
       getRoster();
    };

    const handleEditPlayer = (player) => {
        setEditingPlayer(player);
    };

    const handleSavePlayer = (updatedPlayer) => {
        const playerIndex = players.findIndex( (updatedPlayer) => {
            return editingPlayer._id === updatedPlayer._id;
        })
        if ( playerIndex >= 0) {
            players[playerIndex] = updatedPlayer;
            const updatedPlayersList = Object.assign(players);
            setPlayers(updatedPlayersList);
            setEditingPlayer(null)
        }
    };

    const handleDeletePlayer = async (_id) => {

        const playerToDelete = players.filter((player) => player._id === _id);
        if ( playerToDelete ) {
            const token = localStorage.getItem('token'); // Retrieve authentication token from local storage
            const apiResponse = await axios.delete(`${API_BASE_URL}/${_id}`, {
                headers: {
                Authorization: `Bearer ${token}`, // Set authentication token in headers
                }})
                .then( (response) => {
                    console.log(response);
                    setPlayers(players.filter( (player) => player._id !== _id));
                })
                .catch( (error) => {
                    console.log(error);
                    //Show Error message
                });
        } else  {
            // YOu are here probably the id was not found in the current roster of players
            // you may show a messages here
        }
    };


    const userLog = [
        {
        // id: 'u1',
        // name: 'O',
        // image:
        //     'https://i.kym-cdn.com/photos/images/original/001/701/634/8ef.jpg'
        }
    ]

    return (
        <div className="wrapper">
            <div className="NavBar">
                {/* <NavBar user_inst={userLog}/> */}
                <NavBar user_inst={userLog}/>

            </div>
            <StatHead/>
            
            <Roster players={players} onEdit={setEditingPlayer} onDelete={(x) => handleDeletePlayer(x)} />
            
            
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
