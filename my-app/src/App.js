import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './js/login';
import Signup from './js/sign-up';
import Home from './js/home';
import Success from './js/success';
import Failure from './js/failure';


function App() {
  return (
    <div className="App">
      Proceed to Login or Sign up
      <Router>
      <div>
        <ul className="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/failure">
            <Failure />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
