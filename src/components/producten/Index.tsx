import React from "react";

import { Link } from "react-router-dom";

interface Props {
  sortedData?: iWeek[];
}

const Producten: React.FC<Props> = ({ sortedData }) => {
  if (typeof sortedData !== "undefined") {
    return (
      <div>
        <h1>Producten</h1>

        <div className="o-table__container">
          <h3>Geen idee wat hier komt</h3>
          <div className="o-table">
            <div className="o-table__header">
              <div className="o-table__header__item o-table__left">Tijd</div>
              <div className="o-table__header__item">Wat gedaan</div>
            </div>
            {sortedData.map(week => {
              return (
                <div key={week.weekNummer} className="o-table__row">
                  <div className="o-table__row__learning_goal o-table__left">
                    Week {week.weekNummer}
                  </div>
                  <div className="o-table__right">
                    {week.documents.map(document => {
                      return (
                        <Link
                          key={document.id}
                          to={`/documents/${document.id}`}
                        >
                          <div className="o-table__row__learning_goal__bewijs">
                            - {document.name}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
export default Producten;
