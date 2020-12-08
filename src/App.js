import React from "react";
import { Provider } from "react-redux";
import Login from "./Components/login/Login";
import Home from "./Components/home/Home";
import List from "./Components/list/List";
import Repos from './Components/repos/Repos';

import store from "./store/Store";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/list">
            <List />
          </Route>

          <Route path="/repos">
            <Repos />
          </Route>

          <Redirect from="/" to="/login" exact />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
