import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/homepage/Index";
import "./styling/main.scss";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
