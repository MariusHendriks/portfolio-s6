import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../homepage/Index";
import Document from "../document/Index";
import Producten from "../producten/Index";
import {
  SortDataByWeek,
  SortDataByCourse,
} from "../../functions/dataFunctions";
import FadeIn from "react-fade-in";
import data from "../../data/data.json";
import ReadingGuide from "../readingGuide/Index";

import KritischeVragen from "../pages/KritischeVragen";

function Router() {
  let dataByWeek: iWeek[];
  let dataByLearningGoal: iCourseReadingGuide[];

  const components: any = {
    KritischeVragen: KritischeVragen,
  };

  if (typeof data !== "undefined") {
    dataByWeek = SortDataByWeek(data);
    dataByLearningGoal = SortDataByCourse(data);

    return (
      <Switch>
        <Route exact path="/">
          <FadeIn>
            <div className="o-me"></div>
            <Homepage
              readingGuideData={dataByLearningGoal}
              sortedData={dataByWeek}
            />
          </FadeIn>
        </Route>
        <Route exact path="/leeswijzer">
          <div className="container">
            <ReadingGuide data={dataByLearningGoal} />
          </div>
        </Route>
        <Route exact path="/documents">
          <Producten sortedData={dataByWeek} />
        </Route>
        <Route
          path="/page/:pageId"
          render={({ match }) => {
            const Component = components[match.params.pageId];
            return <Component />;
          }}
        />
        <div className="container">
          <Route
            path="/documents/:documentId"
            render={({ match }) => (
              <Document
                pDocument={dataByWeek
                  .flatMap((w) => w.documents)
                  .find((document) => document.id === match.params.documentId)}
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
