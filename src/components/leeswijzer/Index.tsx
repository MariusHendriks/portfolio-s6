import React from "react";
import FadeIn from "react-fade-in";
import CourseTable from "./courseTable";

interface Props {
  data?: iVakken;
}

const Homepage: React.FC<Props> = ({ data }) => {
  if (typeof data !== "undefined") {
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
  } else {
    return <></>;
  }
};
export default Homepage;
