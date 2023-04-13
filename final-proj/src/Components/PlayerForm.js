import React, { useState } from 'react';

function PlayerForm({ onSubmit, onDelete, player, onEdit }) {
    const [name, setName] = useState(player?.name || '');
    const [number, setNumber] = useState(player?.number || '');
    const [college, setCollege] = useState(player?.college || '');
    const [height, setHeight] = useState(player?.height || '');
    const [age, setAge] = useState(player?.age || '');
    const [picture, setPicture] = useState(player?.picture || '');
    const [position, setPosition] = useState(player?.position || '');
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, number, college, height, age, picture, position });
    };
  
    const handleDelete = () => {
      onDelete();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
  
        <label htmlFor="number">Number:</label>
        <input type="text" id="number" value={number} onChange={(e) => setNumber(e.target.value)} />
  
        <label htmlFor="college">College:</label>
        <input type="text" id="college" value={college} onChange={(e) => setCollege(e.target.value)} />
  
        <label htmlFor="height">Height:</label>
        <input type="text" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
  
        <label htmlFor="age">Age:</label>
        <input type="text" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
  
        <label htmlFor="picture">Picture:</label>
        <input type="file" id="picture" onChange={(e) => setPicture(e.target.files[0])} />
        {picture && <img src={picture} alt="uploaded file" />}

  
        <label htmlFor="position">Position:</label>
        <input type="text" id="position" value={position} onChange={(e) => setPosition(e.target.value)} />
  
        <button type="submit">Submit</button>
  
        {player && player.id && <button type="button" onClick={handleDelete}>Delete</button>}
      </form>
    );
  }
  
  export default PlayerForm;
