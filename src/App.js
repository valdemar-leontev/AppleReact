import React from "react";
import MainHeader from "./components/Header/MainHeader";
import ProductHeader from "./components/Header/ProductHeader/ProductHeader";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SpecificationPage from "./pages/SpecificationPage/SpecificationPage";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main>
      <MainHeader />
      <Router>
        <ProductHeader />
        <Switch>
          <Route path="/specification">
            <SpecificationPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </main>
  );
};

export default App;
