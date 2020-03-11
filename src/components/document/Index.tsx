import React from "react";

interface Props {
  pDocument: iDocument | undefined;
}
const cDocument: React.FC<Props> = ({ pDocument }) => {
  if (typeof pDocument !== "undefined") {
    return <div>{pDocument.naam}</div>;
  } else {
    return <></>;
  }
};
export default cDocument;
