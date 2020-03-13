import React from "react";
import BackButton from "../common/BackButton";
interface Props {
  pDocument: iDocument | undefined;
}
const cDocument: React.FC<Props> = ({ pDocument }) => {
  if (typeof pDocument !== "undefined") {
    return (
      <div>
        <BackButton />
        <h1>{pDocument.name}</h1>
        <p>{pDocument.description}</p>
        <div className="s-iframe__container">
          <iframe
            title={pDocument.name}
            width={"100%"}
            src={`https://docs.google.com/document/d/${pDocument.id}/preview`}
            className="s-iframe"
          ></iframe>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
export default cDocument;
