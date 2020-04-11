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
// import BrainstormIcon from "../../img/brainstorm-icon.png";
import PresentationIcon from "../../img/presentation-icon.png";
import UsabilityIcon from "../../img/usability-icon.png";
import Milestone1 from "../../img/milestone1.png";
import Milestone2 from "../../img/milestone2.png";
import Milestone3 from "../../img/milestone3.png";

interface Props {
  sortedData?: iWeek[];
}
let icons: any = [
  <img className="o-timeline__icon" src={DocumentIcon} alt="Document icon" />,
  <img className="o-timeline__icon" src={ResearchIcon} alt="Research icon" />,
  <img className="o-timeline__icon" src={DesignIcon} alt="Design icon" />,
  <img className="o-timeline__icon" src={UsabilityIcon} alt="Usability icon" />,
  <img
    className="o-timeline__icon"
    src={PresentationIcon}
    alt="Presentation icon"
  />,
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
        header = <h3>Projectinitialisatie</h3>;
        aanvulling = (
          <p>
            Start van het project. In deze fase is er actief gezocht naar
            mogelijke problemen die opgelost konden worden door de groep.
          </p>
        );
        break;
      case 2:
        header = (
          <h3>
            <img src={Milestone1} alt="milestone one" />
            Inspiration Fase
          </h3>
        );
        aanvulling = (
          <p>
            Uit de initialisatiefase zijn veel hypotheses gekomen. Deze
            hypotheses zijn onderzocht in 4 duo's.
          </p>
        );
        break;
      case 3:
        header = (
          <h3>
            <img src={Milestone2} alt="milestone two" />
            Ideation Fase
          </h3>
        );
        aanvulling = (
          <p>
            Nadat de brainstorm sessie had plaatsgevonden, zijn er 4 mogelijke
            oplossingen verzonnen. Deze worden in duo's uitgewerkt. In deze fase
            zijn Bart van de Klundert en ik bezig geweest met een page-builder.
            Daar gaan de producten binnen de ideation fase over.
          </p>
        );
        break;
      case 4:
        aanvulling = (
          <p>
            Tijdens deze fase werkte ik samen met Bart van de Klundert. Terwijl
            Bart de resultaten van de usability tests verwerktte, verwerktte ik
            het prototype.
          </p>
        );
        break;
      case 5:
        header = (
          <h3>
            <img src={Milestone3} alt="milestone three" />
            implementation Fase
          </h3>
        );
        aanvulling = (
          <p>
            Tijdens deze fase is er eerst afgebakend welke producten Stephan
            Pauly van ons kon verwachten. Uit de presentatie is gekomen dat hij
            het meest voorstander was van de app en het dashboard. Deze
            producten zijn in deze fase uitgewerkt. Er is deze week besproken
            wie welke producten zou gaan maken. Dylano Hartman, Max Altena en
            Noël Herwig zijn de app gaan bouwen. Bart van de Klundert, Mike
            Hendriks en ik hebben het dashboard gebouwd.
          </p>
        );
        break;
      case 6:
        aanvulling = <p>Deze weken is er enkel geprogrammeerd.</p>;
        break;
      default:
        break;
    }
    return { header, aanvulling };
  };
  if (typeof sortedData !== "undefined") {
    return (
      <div className="o-timeline">
        <h1>Producten per week</h1>
        <div className="">
          <div className="">
            <VerticalTimeline>
              {sortedData.map((week) => {
                return (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(110, 174, 249)",
                      color: "#000",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(110, 174, 249)",
                    }}
                    date={
                      week.weekNummer !== 6
                        ? "week " + week.weekNummer
                        : "week 6 - 8"
                    }
                    iconStyle={{
                      background: "rgb(110, 174, 249)",
                    }}
                    icon={icons[week.weekNummer - 1]}
                  >
                    {Fase(week.weekNummer).header}
                    {Fase(week.weekNummer).aanvulling}
                    <div key={week.weekNummer} className="">
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
