import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./theme";
import Layout from "./components/Layout";
import Edit from "./screen/Edit";
import Home from "./screen/Home";
import SignUp from "./screen/SignUp";
import SignIn from "./screen/SignIn";
import SignOut from "./screen/SignOut";
import NotFound from "./screen/NotFound";
import Search from "./screen/Search";
import Upload from "./screen/Upload";
import Watch from "./screen/Watch";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <HelmetProvider>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Layout>
                <Home />
              </Layout>
            </Route>
            <Route path="/signup">
              <Layout>
                <SignUp />
              </Layout>
            </Route>
            <Route path="/signin">
              <Layout>
                <SignIn />
              </Layout>
            </Route>
            <Route path="/signout">
              <Layout>
                <SignOut />
              </Layout>
            </Route>
            <Route path="/search">
              <Layout>
                <Search />
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
            <Route>
              <Layout>
                <NotFound />
              </Layout>
            </Route>
          </Switch>
        </Router>
      </HelmetProvider>
    </>
  );
};

export default App;
