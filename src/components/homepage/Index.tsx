import React from "react";
// import ReadingGuide from "../readingGuide/Index";
import Producten from "../producten/Index";
import Intro from "../intro/Index";
import Menu from "../menu/Index";
interface Props {
  readingGuideData?: iCourseReadingGuide[];
  sortedData?: iWeek[];
}

const Homepage: React.FC<Props> = ({ sortedData, readingGuideData }) => {
  return (
    <div>
      <Intro />
      <Producten sortedData={sortedData} />
      <Menu />
      {/* <ReadingGuide data={readingGuideData} /> */}
    </div>
  );
};
export default Homepage;
