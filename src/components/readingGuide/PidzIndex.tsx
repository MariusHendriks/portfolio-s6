import React from "react";
import PidzLeeswijzer from "../pages/PidzLeeswijzer";
import CourseTable from "./courseTable";

interface Props {
  data?: iCourseReadingGuide[];
}

const Homepage: React.FC<Props> = ({ data }) => {
  if (typeof data !== "undefined") {
    return (
      <div className="">
        <PidzLeeswijzer />
        <h1 className="proof">Bewijs</h1>
        <div className="s-tables">
          {data.map((course) => {
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
