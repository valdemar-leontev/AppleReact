import React from "react";
import MainHeader from "./components/Header/MainHeader";
import ProductHeader from "./components/Header/ProductHeader/ProductHeader";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SpecificationPage from "./pages/SpecificationPage/SpecificationPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

const App = () => {
  return (
    <main>
      <Router>
        <MainHeader />
        {/* <ProductHeader /> */}

        <Switch>
          <Route path="/specification">
            <SpecificationPage />
          </Route>

          <Route path="/registration">
            <RegistrationPage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </main>
  );
};

export default App;
