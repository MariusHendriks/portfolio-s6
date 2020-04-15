import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../homepage/Index";
import Document from "../document/Index";
import Producten from "../producten/Index";
import {
  SortDataByWeek,
  SortDataByCourse,
} from "../../functions/dataFunctions";
import FadeIn from "react-fade-in";
import data from "../../data/data.json";
import Leeswijzer from "../readingGuide/Index";

import KritischeVragen from "../pages/KritischeVragen";
import OntwerpDocument from "../pages/OntwerpDocument";
import UsabilityTest from "../pages/UsabilityTest";
import OnderzoeksDocument from "../pages/OnderzoeksDocument";
import PrototypeDevelopen from "../pages/PrototypeDevelopen";
import VoortgangsPresentatie from "../pages/VoortgangsPresentatie";
import Developen from "../pages/Developen";
import Brainstorm from "../pages/Brainstorm";
import BusinessModel from "../pages/BusinessModel";
import ProbleemAnalyse from "../pages/ProbleemAnalyse";
import ReadingGuide from "../pages/ReadingGuide";

function Routing() {
  let dataByWeek: iWeek[];
  let dataByLearningGoal: iCourseReadingGuide[];

  const components: any = {
    KritischeVragen,
    OntwerpDocument,
    UsabilityTest,
    OnderzoeksDocument,
    PrototypeDevelopen,
    VoortgangsPresentatie,
    Developen,
    Brainstorm,

    BusinessModel,
    ReadingGuide,
    ProbleemAnalyse,
  };

  if (typeof data !== "undefined") {
    dataByWeek = SortDataByWeek(data);
    dataByLearningGoal = SortDataByCourse(data);

    return (
      <Router>
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
            <div className="">
              <Leeswijzer data={dataByLearningGoal} />
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
                    .find(
                      (document) => document.id === match.params.documentId
                    )}
                />
              )}
            />
          </div>
        </Switch>
      </Router>
    );
  } else {
    return <div>Helemaal kapot</div>;
  }
}

export default Routing;
