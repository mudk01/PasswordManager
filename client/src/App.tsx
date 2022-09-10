import React from "react";
// import './App.css';
import axios from "axios";
// import Login from './components/Login';
// import Logout from './components/Logout';
// import PasswordList from './components/PasswordList';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  console.log(user)
  const addPassword = async () => {
    // const payload = {
    //   userId: "user1",
    //   userName: "testuser",
    //   password: "abc123",
    //   service: "estservice"
    // }
    const payload = {
      userId: "1234",
    };

    await axios
      .get(
        "http://localhost:3001/api/password/decryptpassword?userId=1234&service=face",
        {}
      )
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((err) => console.log(err));
    
    
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Password Manager
          </Typography>
          {
            isAuthenticated ? 
            <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
            </button>
              :
            <button onClick={() => loginWithRedirect()}>Log In</button>
          }
        </Toolbar>
      </AppBar>
      <button onClick={addPassword}>Click</button>
    </div>
  );
}

export default App;
