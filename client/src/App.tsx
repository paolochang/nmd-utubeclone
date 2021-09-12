import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Edit from "./screen/Edit";
import Home from "./screen/Home";
import Login from "./screen/Login";
import Logout from "./screen/Logout";
import Upload from "./screen/Upload";
import Watch from "./screen/Watch";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route path="/login">
            <Layout>
              <Login />
            </Layout>
          </Route>
          <Route path="/logout">
            <Layout>
              <Logout />
            </Layout>
          </Route>
          <Route path="/upload">
            <Layout>
              <Upload />
            </Layout>
          </Route>
          <Route path="/videos/:id" exact>
            <Layout>
              <Watch />
            </Layout>
          </Route>
          <Route path="/videos/:id/edit">
            <Layout>
              <Edit />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </HelmetProvider>
  );
};

export default App;
