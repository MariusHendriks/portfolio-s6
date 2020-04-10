import React from "react";

interface Props {
  nothingYet?: string;
}
const testComponent: React.FC<Props> = () => {
  return <div className="o-pagenav">Test</div>;
};
export default testComponent;
