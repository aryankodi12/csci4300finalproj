import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' });

export const signIn = (formData) => API.post('/api/sign-in', formData);
export const createAccount = (formData) => API.post('/api/create-account', formData);
export const getRoster = () => API.get('/api/home');
export const createRoster = (rosterData) => API.post('/api/home', rosterData);
export const deletePlayer = (id) => API.delete(`/api/roster/${id}`);
export const updatePlayer = (id, updatedPlayerData) => API.put(`/api/roster/${id}`, updatedPlayerData);


