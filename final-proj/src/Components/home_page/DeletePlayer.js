import React from 'react';
import axios from 'axios';

function Delete({ onDelete, player }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/players/${player.id}`);
      //onDelete();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete this player?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Delete;
