import React from "react";
import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ResearchIcon from "../../img/research-icon.png";
import DevelopmentIcon from "../../img/development-icon.png";
import DocumentIcon from "../../img/document-icon.png";
import DesignIcon from "../../img/design-icon.png";
import BrainstormIcon from "../../img/brainstorm-icon.png";
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

  <img className="o-timeline__icon" src={DevelopmentIcon} alt="Document icon" />
];

const Producten: React.FC<Props> = ({ sortedData }) => {
  const Fase = (weekNummer: any) => {
    let header = <></>;
    switch (weekNummer) {
      case 1:
        header = <h3>Projectinitialisatie</h3>;
        break;
      case 2:
        header = (
          <h3>
            <img src={Milestone1} alt="milestone one" />
            Inspiration Fase
          </h3>
        );
        break;
      case 3:
        header = (
          <h3>
            <img src={Milestone2} alt="milestone two" />
            Ideation Fase
          </h3>
        );
        break;
      case 5:
        header = (
          <h3>
            <img src={Milestone3} alt="milestone three" />
            implementation Fase
          </h3>
        );
        break;
      default:
        break;
    }
    return header;
  };
  if (typeof sortedData !== "undefined") {
    return (
      <div className="o-timeline">
        <h1>Producten per week</h1>
        <div className="">
          <div className="">
            <VerticalTimeline>
              {sortedData.map(week => {
                return (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(110, 174, 249)",
                      color: "#000"
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(110, 174, 249)"
                    }}
                    date={"week " + week.weekNummer}
                    iconStyle={{
                      background: "rgb(110, 174, 249)"
                    }}
                    icon={icons[week.weekNummer - 1]}
                  >
                    {Fase(week.weekNummer)}
                    <div key={week.weekNummer} className="">
                      <div className="">
                        {week.documents.map(document => {
                          return (
                            <Link
                              key={document.id}
                              to={`/documents/${document.id}`}
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
