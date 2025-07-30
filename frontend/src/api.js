import axios from 'axios';

const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
// console.log("is local host? ", isLocalhost)  // for debug

let API_BASE_URL;
if (isLocalhost) {
  API_BASE_URL = import.meta.env.VITE_API_BASE_URL_DEVELOPMENT || 'http://localhost:3000';
} else {
  API_BASE_URL = 'https://glorious-miracle-production.up.railway.app';
}

// console.log('Final API_BASE_URL:', API_BASE_URL);  // for debug


export const handleSearch = async (searchInput, setData) => {
  const errorData = {
    tabLabel: "",
    text: "sorry, there was a server issue. Can you try again?",
    id: "100"
  };

  try {
    const payload = {"searchInput": searchInput};
    const backendData = await makePostRequest(payload);
    console.log("Backend response:", backendData);
    
    if (backendData.data && backendData.data !== "server error") {
      setData(backendData.data);
    } else {
      setData(errorData);
      console.log("No valid data received from backend");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    setData(errorData);
  }
};


export async function makePostRequest(data) {
  try {
    const response = await axios.post(`${API_BASE_URL}/search`, data);
    return response.data;
  } catch (error) {
    console.error('POST request failed:', error);
    throw error;
  }
}
