import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../homepage/Index";
import Document from "../document/Index";
import SortDataByWeek from "../../functions/dataFormatting";
import data from "../../data/data.json";
import Leeswijzer from "../leeswijzer/Index";
function Router() {
  let sortedWeken: iWeek[];
  if (typeof data !== "undefined") {
    sortedWeken = SortDataByWeek(data);
    console.log("sortedWeken. :", sortedWeken);
    return (
      <Switch>
        <Route exact path="/">
          <Homepage data={data} sortedData={sortedWeken} />
        </Route>
        <Route exact path="/leeswijzer">
          <div className="container">
            <Leeswijzer data={data} />
          </div>
        </Route>
        <div className="container">
          <Route
            path="/documents/:documentId"
            render={({ match }) => (
              <Document
                pDocument={sortedWeken
                  .flatMap(w => w.documenten)
                  .find(document => document.id === match.params.documentId)}
              />
            )}
          />
        </div>
      </Switch>
    );
  } else {
    return <div>Helemaal kapot</div>;
  }
}

export default Router;
