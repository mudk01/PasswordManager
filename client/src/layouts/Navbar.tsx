import React, { ReactElement } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = (): ReactElement => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ flexGrow: 1 }} variant="h6" color="inherit" component="div">
            Password Manager
          </Typography>
          {isAuthenticated ? (
            <Button variant="outlined" color="error" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Button>) 
            : (
            <Button variant="outlined" color="success" onClick={() => loginWithRedirect()}>Log In</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;