import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import PidzKritischeVragen from "../pages/PidzKritischeVragen";
import PidzProjectPlan from "../pages/PidzProjectPlan";
import PidzDeliverables from "../pages/PidzDeliverables";
import PidzIndividueleAnalyse from "../pages/PidzIndividueleAnalyse";
import PidzConceptDocument from "../pages/PidzConceptDocument";
import PidzTrendAnalyse from "../pages/PidzTrendAnalyse";
import PidzConcurrentieanalyse from "../pages/PidzConcurrentieanalyse";
import PidzBusinessModel from "../pages/PidzBusinessModel";
import PidzOntwerpen from "../pages/PidzOntwerpen";
import PidzUsabilityTest from "../pages/PidzUsabilityTest";
import PidzCommunicatiestrategie from "../pages/PidzCommunicatiestrategie";
import PidzFeedback from "../pages/PidzFeedback";
import PidzLeeswijzer from "../readingGuide/PidzIndex";

import Pidz from "../../img/pidz.jpg";
import Ikwil from "../../img/ikwil.png";

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
    PidzKritischeVragen,
    PidzProjectPlan,
    PidzIndividueleAnalyse,
    PidzConcurrentieanalyse,
    PidzConceptDocument,
    PidzTrendAnalyse,
    PidzBusinessModel,
    PidzOntwerpen,
    PidzUsabilityTest,
    PidzCommunicatiestrategie,
    PidzFeedback,
    PidzDeliverables,
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
            <div className="o-card__container">
              <a href="/ikwil">
                <div className="o-card">
                  <div className="o-card__img">
                    <img src={Ikwil} alt="Ikwil" />
                  </div>
                  <h1>ikwil</h1>
                  <p className="o-card__text">
                    Tijdens dit project is er een dashboard gebouwd voor
                    stichting ik wil. Er is onderzoek gedaan dichbij de
                    gebruikers en er werd op locatie gewerkt.
                  </p>
                </div>
              </a>
              <a href="/pidz">
                <div className="o-card">
                  <div className="o-card__img">
                    <img src={Pidz} alt="Pidz" />
                  </div>
                  <h1>Pidz</h1>
                  <p className="o-card__text">
                    Tijdens dit project is er een nieuw platform
                    ontworpen:"WijPIDZ". Op dit platform kunnen ZZP'ers die in
                    de zorg werken opleidingen volgen, artikelen kopen en
                    communities vormen door o.a. vragen te stellen aan elkaar.
                  </p>
                </div>
              </a>
            </div>
          </Route>
          <Route exact path="/ikwil">
            <FadeIn>
              <a href="/">
                <div className="o-me"></div>
              </a>
              <Homepage
                readingGuideData={dataByLearningGoalIkWil}
                sortedData={dataByWeekIkWil}
              />
            </FadeIn>
          </Route>
          <Route exact path="/pidz">
            <FadeIn>
              <a href="/">
                <div className="o-me"></div>
              </a>
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
          <Route exact path="/pidz/leeswijzer">
            <div className="">
              <PidzLeeswijzer data={dataByLearningGoalPidz} />
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
