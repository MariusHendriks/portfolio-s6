import React from "react";

import CourseTable from "./courseTable";

interface Props {
  data?: iCourseReadingGuide[];
}

const Homepage: React.FC<Props> = ({ data }) => {
  if (typeof data !== "undefined") {
    return (
      <div>
        <h1>Leeswijzer</h1>
        <div className="s-tables">
          {data.map(course => {
            return <CourseTable key={course.name} data={course} />;
          })}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
export default Homepage;
