import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/homepage/Index";
import "./styling/main.scss";
import Leeswijzer from "./components/leeswijzer/Index";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/leeswijzer">
          <Leeswijzer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
