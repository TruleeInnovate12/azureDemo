import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './p.css';
function App() {
  const [message, setMessage] = useState('');
  console.log('NODE_ENV:', process.env.NODE_ENV);
  useEffect(() => {
    console.log('NODE_ENV:', process.env.NODE_ENV);
    const backendUrl = process.env.NODE_ENV === 'production'
      ? 'https://backend-azuredemo.azurewebsites.net'
      : 'http://localhost:4040';
    console.log('Attempting to fetch message from backend...');
    axios.get(`${backendUrl}/api/message`)
      .then(response => {
        console.log('Response received:', response);
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        hi !
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;