import React from "react";
import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ResearchIcon from "../../img/research-icon.png";
import DevelopmentIcon from "../../img/development-icon.png";
import DocumentIcon from "../../img/document-icon.png";
import DesignIcon from "../../img/design-icon.png";
import DoneIcon from "../../img/done-icon.png";
import Milestone0 from "../../img/milestone0.png";
import Milestone1 from "../../img/milestone1.png";
import Milestone2 from "../../img/milestone2.png";
import Milestone3 from "../../img/milestone3.png";
import Milestone4 from "../../img/milestone4.png";

interface Props {
  sortedData?: iWeek[];
}
let lastIcon = (
  <img className="o-timeline__icon" src={DoneIcon} alt="Done icon" />
);
let icons: any = [
  <img className="o-timeline__icon" src={DocumentIcon} alt="Document icon" />,
  <img className="o-timeline__icon" src={DocumentIcon} alt="Document icon" />,
  <img className="o-timeline__icon" src={ResearchIcon} alt="ResearchIcon" />,
  <img className="o-timeline__icon" src={ResearchIcon} alt="ResearchIcon" />,
  <img className="o-timeline__icon" src={ResearchIcon} alt="ResearchIcon" />,
  <img className="o-timeline__icon" src={DesignIcon} alt="DesignIcon" />,
  <img
    className="o-timeline__icon"
    src={DevelopmentIcon}
    alt="Document icon"
  />,

  <img
    className="o-timeline__icon"
    src={DevelopmentIcon}
    alt="Document icon"
  />,
];

const Producten: React.FC<Props> = ({ sortedData }) => {
  const Fase = (weekNummer: any) => {
    let header = <></>;
    let aanvulling = <></>;
    switch (weekNummer) {
      case 1:
        header = (
          <h3>
            <img src={Milestone0} alt="milestone zero" />
            Oriëntatie
          </h3>
        );
        aanvulling = (
          <p>
            Start van het project. In deze week werd er gekeken naar wat de
            opdracht in ging houden. Dit werd individueel gemaakt en werd daarna
            als groep besproken.
          </p>
        );
        break;
      case 2:
        header = (
          <h3>
            <img src={Milestone1} alt="milestone one" />
            Start project
          </h3>
        );
        aanvulling = (
          <p>
            Als eerst is er een projectplan gemaakt om de rest van te weken een
            idee te hebben wat er allemaal gedaan moest worden. Het projectplan
            is gebaseerd op het vooronderzoek van PIDZ, de gemaakte individuele
            analyse en de kritische vragen.
          </p>
        );
        break;
      case 3:
        header = (
          <h3>
            <img src={Milestone2} alt="milestone two" />
            Research (1/3)
          </h3>
        );
        aanvulling = (
          <p>
            Het was van belang te onderzoeken waar PIDZ in kan uitstralen ten
            opzichte van concurrenten. om deze reden is er individueel een
            concurentie analyse gemaakt.
          </p>
        );
        break;
      case 4:
        header = (
          <h3>
            <img src={Milestone2} alt="milestone two" />
            Research (2/3)
          </h3>
        );
        aanvulling = (
          <p>
            Om met de laatste trends mee te gaan is er gekeken naar welke trends
            er zijn, en uitgezocht welke aansloot op het product. Dit was
            relevant omdat de kans op het slagen van het product toeneemt met
            dit onderzoek. Met alle informatie die tot deze week vergaard is, is
            een conceptdocument gemaakt. Hier staat een proof of concept, SWOT
            en USP in.
          </p>
        );
        break;
      case 5:
        header = (
          <h3>
            <img src={Milestone2} alt="milestone two" />
            Research (3/3)
          </h3>
        );
        aanvulling = (
          <p>
            Nu het concept duidelijk was is er een business model gemaakt om te
            bekijken wat de gecreeërde waardes zijn en waar er geld te verdienen
            valt. Deze week was ik persoonlijk minder productief omdat ik een
            plotselinge operatie ben ondergaan.
          </p>
        );
        break;
      case 6:
        header = (
          <h3>
            <img src={Milestone3} alt="milestone three" />
            Bouwfase
          </h3>
        );
        aanvulling = (
          <p>
            Nu al het onderzoek gedaan is, is het tijd om te ontwerpen en
            testen. Het ontwerp en de usability test zijn geleidelijk gemaakt.
            Er is eerst een prototype gemaakt, en deze is daarna getest en
            verbeterd.
          </p>
        );
        break;
      case 9:
        header = (
          <h3>
            <img src={Milestone4} alt="milestone four" />
            Eindfase
          </h3>
        );
        aanvulling = (
          <p>
            In deze fase zijn de puntjes op de i gezet en zijn de deliverables
            ingeleverd. Daarnaast is er feedback op elkaar gegeven om onszelf te
            verbeteren.
          </p>
        );
        break;
      default:
        break;
    }
    return { header, aanvulling };
  };
  if (typeof sortedData !== "undefined") {
    return (
      <div className="o-timeline">
        <h1>Verloop project</h1>
        <div className="">
          <div className="">
            <VerticalTimeline>
              {sortedData.map((week) => {
                if (week.weekNummer >= 7 && week.weekNummer <= 8) {
                  return null;
                }
                return (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    key={week.weekNummer}
                    contentStyle={{
                      background: "rgb(110, 174, 249)",
                      color: "#000",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(110, 174, 249)",
                    }}
                    date={
                      week.weekNummer === 6
                        ? "Week 6 tot 8"
                        : "Week " + week.weekNummer
                    }
                    iconStyle={{
                      background: "rgb(110, 174, 249)",
                    }}
                    icon={
                      week.weekNummer !== 9
                        ? icons[week.weekNummer - 1]
                        : lastIcon
                    }
                  >
                    {Fase(week.weekNummer).header}
                    {Fase(week.weekNummer).aanvulling}
                    <div className="">
                      <div className="o-timeline__product">
                        Producten:
                        {week.documents.map((document) => {
                          return (
                            <Link
                              key={document.id}
                              to={`/page/${document.page}`}
                            >
                              <div className="">- {document.name}</div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
export default Producten;
