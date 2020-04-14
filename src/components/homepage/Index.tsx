import React from "react";

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
    </div>
  );
};
export default Homepage;
