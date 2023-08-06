// Register page

import {
  Box,
  Button,
  Container,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { log } from "console";
import { Redirect, useHistory } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cp, setCp] = useState("");
  const [snackOpen, setSnackOpen] = useState(false);
  const [showErr, setShowErr] = useState(false);

  const history = useHistory();

  const isValidEmail = (email: string) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password: string) => {
    // Regular expression for password validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const isValidConfimP = (cp: string) => {
    if (cp === password) {
      return true;
    } else {
      return false;
    }
  };
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
    if (
      isValidEmail(email) &&
      isValidPassword(password) &&
      isValidConfimP(cp)
    ) {
      console.log("validation success");
      setSnackOpen(true);
      localStorage.setItem(
        "cred",
        JSON.stringify({
          email: email,
          password: password,
        })
      );

      history.push("/login");
    } else {
      setShowErr(true);
    }
  };

  return (
    <div>
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
            helperText={
              showErr && "Password must be at least a number and alphabet"
            }
          />
          <TextField
            id="cp"
            type="password"
            label="Confirm Password*"
            variant="outlined"
            margin="dense"
            style={{ width: "250px" }}
            value={cp}
            onChange={(e) => setCp(e.target.value)}
            helperText={
              showErr && "Confirm password must match password and is required"
            }
          />
          <Box marginTop={"10px"}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                onsubmit();
              }}
            >
              Register
            </Button>
          </Box>

          <Snackbar
            open={snackOpen}
            autoHideDuration={6000}
            onClose={handleSnackClose}
          >
            <Alert onClose={handleSnackClose} severity="success">
              Register success
            </Alert>
          </Snackbar>
        </Box>
      </Container>
    </div>
  );
}
