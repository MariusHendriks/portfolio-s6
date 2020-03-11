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
        <h2>op chronologische volgorde</h2>
        <div className="o-table__container">
          <h3>Geen idee wat hier komt</h3>
          <div className="o-table">
            <div className="o-table__header">
              <div className="o-table__header__item o-table__left">
                Criteria
              </div>
              <div className="o-table__header__item">Bewijs</div>
            </div>
            {sortedData.map(week => {
              return (
                <div key={week.weekNummer} className="o-table__row">
                  <div className="o-table__row__leerdoel o-table__left">
                    Week {week.weekNummer}
                  </div>
                  <div>
                    <div>
                      {week.documenten.map(document => {
                        return (
                          <Link to={`/documents/${document.id}`}>
                            <div key={document.id}>{document.naam}</div>
                          </Link>
                        );
                      })}
                    </div>
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
