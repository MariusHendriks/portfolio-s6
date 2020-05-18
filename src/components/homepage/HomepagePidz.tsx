import React from "react";

import Menu from "../menu/Index";
import IntroPidz from "../intro/IntroPidz";
import ProductenPidz from "../producten/ProductenPidz";
interface Props {
  readingGuideData?: iCourseReadingGuide[];
  sortedData?: iWeek[];
}

const HomepagePidz: React.FC<Props> = ({ sortedData, readingGuideData }) => {
  return (
    <div>
      <IntroPidz />
      <ProductenPidz sortedData={sortedData} />
      <Menu />
    </div>
  );
};
export default HomepagePidz;
