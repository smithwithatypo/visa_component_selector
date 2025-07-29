import axios from 'axios';

const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
console.log("is local host? ", isLocalhost)  // for debug

let API_BASE_URL;
if (isLocalhost) {
  API_BASE_URL = import.meta.env.VITE_API_BASE_URL_DEVELOPMENT || 'http://localhost:3000';
} else {
  // API_BASE_URL = import.meta.env.VITE_API_BASE_URL_PRODUCTION || 'https://visacomponentselector-production.up.railway.app';
  API_BASE_URL = `https://glorious-miracle-production.up.railway.app:3000`;
}

console.log('Final API_BASE_URL:', API_BASE_URL);  // for debug

export async function makeGetRequest() {
  try {
    const response = await axios.get(`${API_BASE_URL}/search`);
    return response.data;
  } catch (error) {
    console.error('GET request failed:', error);
    throw error;
  }
}

export async function makePostRequest(data) {
  try {
    const response = await axios.post(`${API_BASE_URL}/search`, data);
    return response.data;
  } catch (error) {
    console.error('POST request failed:', error);
    throw error;
  }
}