import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../homepage/Index";
import Document from "../document/Index";
import SortDataByWeek from "../../functions/dataFormatting";
import data from "../../data/data.json";
function Router() {
  let sortedWeken: iWeek[];
  if (typeof data !== "undefined") {
    sortedWeken = SortDataByWeek(data);
    console.log("sortedWeken. :", sortedWeken);
    return (
      <Switch>
        <Route exact path="/">
          <Homepage sortedData={sortedWeken} />
        </Route>
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
      </Switch>
    );
  } else {
    return <div>Helemaal kapot</div>;
  }
}

export default Router;
