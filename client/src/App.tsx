import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const addPassword = async () => {
    const payload = {
      userId: "user1",
      userName: "testuser",
      password: "abc123",
      service: "estservice"
    }

    await axios.post('http://localhost:3001/api/password/addpassword', payload, {
    })
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((err) => console.log(err));
    
  }

  return (
    <div className="App">
      <button onClick={addPassword}>Click</button>
    </div>
  );
}

export default App;
