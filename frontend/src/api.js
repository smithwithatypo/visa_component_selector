import axios from 'axios';

const environment = import.meta.env.MODE || 'development';
let API_BASE_URL;

if (environment === 'production') {
  API_BASE_URL = import.meta.env.VITE_API_BASE_URL_PRODUCTION || 'https://visacomponentselector-production.up.railway.app:3000';
} else {
  API_BASE_URL = import.meta.env.VITE_API_BASE_URL_DEVELOPMENT || 'http://localhost:3000';
}

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