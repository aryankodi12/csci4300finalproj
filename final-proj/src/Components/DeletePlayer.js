import React from 'react';

function Delete({ onDelete, player }) {
  const handleDelete = () => {
    onDelete();
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
