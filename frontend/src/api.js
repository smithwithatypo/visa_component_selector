import axios from 'axios';
const API_BASE_URL = 'http://localhost:3000';


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