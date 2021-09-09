import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./screen/Home";
import Watch from "./screen/Watch";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/watch">
          <Watch />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
