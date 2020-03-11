import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/homepage/Index";
import "./styling/main.scss";
import Leeswijzer from "./components/leeswijzer/Index";
import Producten from "./components/producten/Index";
function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/leeswijzer">
        <div className="container">
          <Leeswijzer />
        </div>
      </Route>
      <Route exact path="/producten">
        <div className="container">
          <Producten />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
