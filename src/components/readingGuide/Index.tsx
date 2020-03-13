import React from "react";
import FadeIn from "react-fade-in";
import CourseTable from "./courseTable";

interface Props {
  data?: iCourseReadingGuide[];
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
            {data.map(course => {
              return <CourseTable key={course.name} data={course} />;
            })}
          </div>
        </FadeIn>
      </div>
    );
  } else {
    return <></>;
  }
};
export default Homepage;
