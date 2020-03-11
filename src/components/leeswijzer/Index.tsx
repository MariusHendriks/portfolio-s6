import React from "react";
import FadeIn from "react-fade-in";
import CourseTable from "./courseTable";
import data from "../../data/data.json";

/*
https://portal.fhict.nl/Blokboeken/s6_media_blokboek_2020.pdf
*/
const Homepage: React.FC = () => {
  return (
    <div>
      <FadeIn delay={100}>
        <h1>Bam</h1>
      </FadeIn>
      <FadeIn delay={500}>
        <h2>Leeswijzer</h2>
        <div className="s-tables">
          <CourseTable data={data.sco} />
          <CourseTable data={data.pro} />
          <CourseTable data={data.uxu} />
          <CourseTable data={data.ded} />
        </div>
      </FadeIn>
    </div>
  );
};
export default Homepage;
