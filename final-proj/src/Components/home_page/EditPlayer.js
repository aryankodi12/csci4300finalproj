import React, { useState } from 'react';
import axios from 'axios';
import './EditPlayer.css'



function EditPlayer(props) {
  const { player, onSubmit, onCancel } = props;

  // Initialize state with the current player's details
  const [editedPlayer, setEditedPlayer] = useState(player);
  const [showForm, setShowForm] = useState(true);

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedPlayer({ ...editedPlayer, [name]: value });
  };

  // Handle save button click
  // const handleSave = () => {
  //   onSubmit(editedPlayer);
  //   setShowForm(false);
  // };


  const handleSave = async () => {
    try {
      console.log(`Sending PUT request to update player with id ${player._id} with data:`, editedPlayer);
      await axios.put(`http://localhost:8082/api/back/${player._id}`, editedPlayer)
        .then( (resp) => {
          console.log(`PUT request to update player with id ${player._id} successful. Response data:`, resp.data);
          onSubmit(resp.data);
          //setShowForm(false);
        });
      
    } catch (error) {
      console.error(error);
    }
  };
  
  

  // Handle cancel button click
  // const handleCancel = () => {
  //   setShowForm(false);
  //   onCancel();
  // };
  
  return (
    <div className="edit-form">
      {showForm && (
        <div >
          <div className="edHead">
             <h2 className="edText">Edit Player</h2>
          </div>
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" value={editedPlayer.name} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="number">Number:</label>
              <input type="number" name="number" value={editedPlayer.number} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="college">College:</label>
              <input type="text" name="college" value={editedPlayer.college} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="height">Height:</label>
              <input type="text" name="height" value={editedPlayer.height} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="age">Age:</label>
              <input type="number" name="age" value={editedPlayer.age} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="pic">Picture:</label>
              <input type="photo" name="pic" value={editedPlayer.picture} onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="position">Position:</label>
              <input type="text" name="position" value={editedPlayer.position} onChange={handleInputChange} />
            </div>
            <div>
              <button type="button" onClick={handleSave}>Save</button>
            </div>
          </form>
        </div>
      )}
      {!showForm && setShowForm(true)}
    </div>
  );
}

export default EditPlayer;