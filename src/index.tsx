import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Welcome from "./Welcome";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/welcome">
          {localStorage.getItem("logIn") === "pass" ? (
            <Welcome />
            // console.log("isss", localStorage.getItem("logIn"))
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
