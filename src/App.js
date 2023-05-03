import React from "react";
import MainHeader from "./components/Header/MainHeader";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SpecificationPage from "./pages/SpecificationPage/SpecificationPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import BasketPage from "./pages/BasketPage/BasketPage";
import PurchasePage from "./pages/PurchasePage/PurchasePage";
import DeliveryPage from "./pages/DeliveryPage/DeliveryPage";

const App = () => {
  return (
    <main>
      <Router>
        <MainHeader />

        <Switch>
          <Route path="/specification">
            <SpecificationPage />
          </Route>

          <Route path="/registration">
            <RegistrationPage />
          </Route>

          <Route path="/customer-basket">
            <BasketPage />
          </Route>

          <Route path="/purchase/:purchaseId">
            <PurchasePage />
          </Route>

          <Route path="/delivery/:purchaseId">
            <DeliveryPage />
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
