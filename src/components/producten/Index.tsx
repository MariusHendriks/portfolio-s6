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

    console.log("dataPerWeek :", weken);
    return (
      <div>
        <h1>Producten</h1>
        <h2>op chronologische volgorde</h2>
        <div className="o-table__container"></div>
      </div>
    );
  } else {
    return <></>;
  }
};
export default Producten;
