import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../homepage/Index";
import Document from "../document/Index";
import {
  SortDataByWeek,
  SortDataByCourse
} from "../../functions/dataFunctions";

import data from "../../data/data.json";
import Leeswijzer from "../leeswijzer/Index";

function Router() {
  let dataByWeek: iWeek[];
  let dataByLearningGoal: iVakLeeswijzer[];

  if (typeof data !== "undefined") {
    dataByWeek = SortDataByWeek(data);
    dataByLearningGoal = SortDataByCourse(data);

    return (
      <Switch>
        <Route exact path="/">
          <Homepage
            leeswijzerData={dataByLearningGoal}
            sortedData={dataByWeek}
          />
        </Route>
        <Route exact path="/leeswijzer">
          <div className="container">
            <Leeswijzer data={dataByLearningGoal} />
          </div>
        </Route>
        <div className="container">
          <Route
            path="/documents/:documentId"
            render={({ match }) => (
              <Document
                pDocument={dataByWeek
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
