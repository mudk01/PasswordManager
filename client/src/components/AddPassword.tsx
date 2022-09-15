import React, { ReactElement, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, TextField, Button } from "@mui/material";
import axios from "axios";

const AddPassword = (): ReactElement => {
  const { isAuthenticated, user } = useAuth0();
  const [userName, setUserName] = useState("");
  const [service, setService] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState<string | undefined>("");
  const getCurrUserId = () => {
    if (isAuthenticated) {
      let id = user!.sub;
      return id !== undefined ? id.substring(id.indexOf("|") + 1) : "";
    }
  };

  useEffect(() => {
    const id = getCurrUserId();
    setUserId(id);
    console.log('executing')
  }, [isAuthenticated]);

  const handleUsernameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setPassword(event.target.value);
  };

  const handleServiceChange = (event: {
    target: { value: React.SetStateAction<string> };
  }): void => {
    setService(event.target.value);
  };

  const addPassword = async () => {
    const payload = {
      userId: userId,
      userName: userName,
      password: password,
      service: service,
    };
    console.log(payload);
    const response = await axios.post(
      "http://localhost:3001/api/password/addpassword",
      payload,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    console.log(response);
  };

  return (
  <Box>
    {isAuthenticated && (<Box>
        <TextField
          label="Username"
          placeholder="Enter username/email"
          onChange={handleUsernameChange}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          onChange={handlePasswordChange}
        />
        <TextField
          label="Service"
          placeholder="Enter service"
          onChange={handleServiceChange}
        />
        <Button onClick={addPassword}>Submit</Button>
        </Box>)}
  </Box>
  );
};

export default AddPassword;
