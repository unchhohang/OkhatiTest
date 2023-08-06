// Login page

import {
  Box,
  Button,
  Container,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { log } from "console";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackOpen, setSnackOpen] = useState(false);
  const [showErr, setShowErr] = useState(false);
  const [cred] = useState(
    localStorage.getItem("cred")
      ? JSON.parse(localStorage.getItem("cred")!)
      : ""
  );

  const history = useHistory();

  const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const handleSnackClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };

  const onsubmit = () => {
    if (email === cred?.email && password === cred?.password) {
      localStorage.setItem("logIn", "pass");
      history.push("/welcome");
      console.log("shoul had gone through");
    } else {
      console.log("why going here");
      setShowErr(true);
    }
  };
  return (
    <Container fixed>
      <Box
        display="flex"
        flexDirection="column"
        alignItems={"center"}
        marginTop={"50px"}
      >
        <Typography align="center">Happy Coding</Typography>
        <TextField
          id="email"
          label="Email*"
          variant="outlined"
          margin="dense"
          style={{ width: "250px" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helperText={showErr && "Valid Email is Required"}
        />
        <TextField
          id="password"
          type="password"
          label="Password*"
          variant="outlined"
          margin="dense"
          style={{ width: "250px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          helperText={showErr && "Valid password is required"}
        />
        <Box marginTop={"10px"}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              onsubmit();
            }}
          >
            Log in
          </Button>
        </Box>

        <Snackbar
          open={snackOpen}
          autoHideDuration={6000}
          onClose={handleSnackClose}
        >
          <Alert onClose={handleSnackClose} severity="success">
            Login success
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
}
