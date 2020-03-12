import React from "react";
import BackButton from "../common/BackButton";
interface Props {
  pDocument: iDocument | undefined;
}
const cDocument: React.FC<Props> = ({ pDocument }) => {
  console.log("pDocument :", pDocument);
  if (typeof pDocument !== "undefined") {
    return (
      <div>
        <BackButton />
        <h1>{pDocument.naam}</h1>
        <p>{pDocument.beschrijving}</p>
        <iframe
          title={pDocument.naam}
          src={`https://docs.google.com/document/d/${pDocument.id}/preview`}
          width={"100%"}
          height={500}
        ></iframe>
      </div>
    );
  } else {
    return <></>;
  }
};
export default cDocument;
