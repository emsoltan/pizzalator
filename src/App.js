import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Ingredients";
import Recipe from "./components/Recipe"
function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [], count: "" });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };
  const addCount = (count) => {
    setPizza({ ...pizza, count });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/base">
            <Base addBase={addBase} addCount={addCount} pizza={pizza} />
          </Route>
          <Route path="/ingredients">
            <Toppings addTopping={addTopping} pizza={pizza} />
          </Route>
          <Route path="/recipe">
            <Recipe addBase={addBase} addCount={addCount} pizza={pizza} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
