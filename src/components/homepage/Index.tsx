import React from "react";
import ReadingGuide from "../readingGuide/Index";
import Producten from "../producten/Index";

interface Props {
  readingGuideData?: iCourseReadingGuide[];
  sortedData?: iWeek[];
}

const Homepage: React.FC<Props> = ({ sortedData, readingGuideData }) => {
  return (
    <div className="container">
      <Producten sortedData={sortedData} />
      <ReadingGuide data={readingGuideData} />
    </div>
  );
};
export default Homepage;
