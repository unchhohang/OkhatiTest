import React, { useState } from "react";
import "./App.css";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Welcome from "./Welcome";
function App() {
  const [isLogg, setIsLogg] = useState(false);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Register />
          </Route>
          <Route path="/login">
            <Login setIsLogg={setIsLogg} />
          </Route>
          <Route path="/welcome">
            {isLogg ? (
              <Welcome />
            ) : (
              // console.log("isss", localStorage.getItem("logIn"))
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
