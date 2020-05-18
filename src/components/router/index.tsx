import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Homepage from "../homepage/Index";
import Document from "../document/Index";
import {
  SortDataByWeek,
  SortDataByCourse,
} from "../../functions/dataFunctions";
import FadeIn from "react-fade-in";
import data from "../../data/data.json";
import dataPidz from "../../data/dataPidz.json";
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

import HomepagePidz from "../homepage/HomepagePidz";

import PidzConcurrentieanalyse from "../pages/PidzConcurrentieanalyse";
import { Button } from "react-scroll";

function Routing() {
  let dataByWeekIkWil: iWeek[];
  let dataByLearningGoalIkWil: iCourseReadingGuide[];

  let dataByWeekPidz: iWeek[];
  let dataByLearningGoalPidz: iCourseReadingGuide[];

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

    PidzConcurrentieanalyse,
  };

  if (typeof data !== "undefined") {
    dataByWeekIkWil = SortDataByWeek(data);
    dataByLearningGoalIkWil = SortDataByCourse(data);

    dataByWeekPidz = SortDataByWeek(dataPidz);
    dataByLearningGoalPidz = SortDataByCourse(dataPidz);

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div>
              <a href="/ikwil">Ikwil</a>
            </div>
            <div>
              <a href="/pidz">Pidz</a>
            </div>
          </Route>
          <Route exact path="/ikwil">
            <FadeIn>
              <div className="o-me"></div>
              <Homepage
                readingGuideData={dataByLearningGoalIkWil}
                sortedData={dataByWeekIkWil}
              />
            </FadeIn>
          </Route>
          <Route exact path="/pidz">
            <FadeIn>
              <div className="o-me"></div>
              <HomepagePidz
                readingGuideData={dataByLearningGoalPidz}
                sortedData={dataByWeekPidz}
              />
            </FadeIn>
          </Route>
          <Route exact path="/ikwil/leeswijzer">
            <div className="">
              <Leeswijzer data={dataByLearningGoalIkWil} />
            </div>
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
                  pDocument={dataByWeekIkWil
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
