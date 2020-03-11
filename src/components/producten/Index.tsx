import React, { useState } from "react";
import data from "../../data/data.json";
// import { Link } from "react-router-dom";

let weken: iWeek[] = [];
const SortDataByWeek = (subject: iOnderwerp) => {
  subject.leerdoelen.forEach(leerdoel => {
    leerdoel.documenten.forEach(document => {
      let week = weken.find(w => w.weekNummer === document.week);
      if (!week) {
        let newWeek: iWeek = {
          weekNummer: document.week,
          documenten: [document]
        };
        weken.push(newWeek);
      } else {
        week.documenten.push(document);
      }
    });
  });
  weken.sort((w1, w2) => {
    if (w1.weekNummer < w2.weekNummer) {
      return -1;
    } else {
      return 1;
    }
  });
  return weken;
};

const Producten: React.FC = () => {
  const [isRendered, setIsRendered] = useState<boolean>(false);
  if (typeof data !== "undefined") {
    if (!isRendered) {
      SortDataByWeek(data.sco);
      SortDataByWeek(data.pro);
      SortDataByWeek(data.uxu);
      SortDataByWeek(data.ded);
      setIsRendered(true);
    }

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
            {weken.map(week => {
              return (
                <div key={week.weekNummer} className="o-table__row">
                  <div className="o-table__row__leerdoel o-table__left">
                    Week {week.weekNummer}
                  </div>
                  <div>
                    <div>
                      {week.documenten.map(document => {
                        return <div key={document.naam}>{document.naam}</div>;
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
