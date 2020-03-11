import React from "react";
import { Link } from "react-router-dom";

interface Props {
  data?: iOnderwerp;
}
const CourseTable: React.FC<Props> = ({ data }) => {
  if (typeof data !== "undefined") {
    return (
      <div className="o-table__container">
        <h3>{data.naam}</h3>
        <div className="o-table">
          <div className="o-table__header">
            <div className="o-table__header__item o-table__left">Criteria</div>
            <div className="o-table__header__item">Bewijs</div>
          </div>
          {data.leerdoelen.map(leerdoel => {
            return (
              <div key={leerdoel.naam} className="o-table__row">
                <div className="o-table__row__leerdoel o-table__left">
                  {leerdoel.naam}
                </div>
                <div>
                  {leerdoel.documenten.map(document => {
                    return (
                      <div key={document.id}>
                        <Link to={`/documents/${document.id}`}>
                          <div>{document.naam}</div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <> </>;
  }
};
export default CourseTable;
