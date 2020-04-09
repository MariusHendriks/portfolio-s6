import React from "react";
import BackButton from "../common/BackButton";
import PDF from "./PDF";
import Link from "./Link";
interface Props {
  pDocument: iDocument | undefined;
}

const cDocument: React.FC<Props> = ({ pDocument }) => {
  if (typeof pDocument !== "undefined") {
    return (
      <div className="s-document">
        <BackButton />
        <div className="o-card">
          <h1>{pDocument.name}</h1>
          <p>{pDocument.description}</p>

          <Link name={pDocument.link} text={pDocument.linkText} />
          <Link name={pDocument.link2} text={pDocument.linkText2} />
        </div>

        <div>
          <PDF docName={pDocument.pdfName} />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
export default cDocument;
