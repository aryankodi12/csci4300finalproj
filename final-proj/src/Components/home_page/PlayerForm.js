import React, { useState } from 'react';
import axios from 'axios';
import './PlayerForm.css';

function PlayerForm({ onSubmit, onDelete, player, onEdit }) {
  const [name, setName] = useState(player?.name || '');
  const [number, setNumber] = useState(player?.number || '');
  const [college, setCollege] = useState(player?.college || '');
  const [height, setHeight] = useState(player?.height || '');
  const [age, setAge] = useState(player?.age || '');
  const [picture, setPicture] = useState(player?.picture || '');
  const [pictureUrl, setPictureUrl] = useState('');
  const [position, setPosition] = useState(player?.position || '');

  const resetForm = () => {
    setName('');
    setNumber('');
    setCollege('');
    setHeight('');
    setAge('');
    setPicture('');
    setPictureUrl('');
    setPosition('');
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit({ name, number, college, height, age, picture, position });
  //   resetForm();
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const playerData = { name, number, college, height, age, picture: pictureUrl, position };
  
    try {
      const response = await axios.post('/api/players', playerData);
      console.log(response.data);
      onSubmit(response.data);
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };
  

  // const handleDelete = () => {
  //   onDelete();
  // };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/players/${player.id}`);
      onDelete();
    } catch (error) {
      console.error(error);
    }
  };

  const handlePictureChange = async (e) => {
    const file = e.target.files[0];
    setPicture(file);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/upload', formData);
      setPictureUrl(response.data.url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className ="forms">
      <div className="addHead">
        <h3 className="addText">Add Player</h3>
      </div>
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
        <input type="file" id="picture" onChange={handlePictureChange} />
        {pictureUrl && <img className="player-image" src={pictureUrl} alt="uploaded file" />}

        <label htmlFor="position">Position:</label>
        <input type="text" id="position" value={position} onChange={(e) => setPosition(e.target.value)} />

        <button type="submit">Submit</button>

        {player && player.id && <button className="delete" type="button" onClick={handleDelete}>Delete</button>}
      

      </form>
    </div>
  );
}

export default PlayerForm;
