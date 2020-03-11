import React from "react";

interface Props {
  pDocument: iDocument | undefined;
}
const cDocument: React.FC<Props> = ({ pDocument }) => {
  console.log("pDocument :", pDocument);
  if (typeof pDocument !== "undefined") {
    return (
      <div>
        <h1>{pDocument.naam}</h1>
        <iframe
          title={pDocument.naam}
          src={`https://docs.google.com/document/d/e/2PACX-${pDocument.id}/pub?embedded=true`}
          width={"100%"}
          height={500}
        ></iframe>
      </div>
    );

    //"https://docs.google.com/document/d/e/2PACX-1vQt5EYzmhFVPhgcQaVvgUrzWE-kQD0dxFloe4kvb2FPiJwBnkzR8dgTJOv9TaaW32gH7fgLN2XaaNQ5/pub?embedded=true"
    //"https://docs.google.com/document/d/e/2PACX-1vTU6u2qITc5Io73aqqAu8tM-jM8BTrAvq8YChHS3uQUW6QC0Mwfgc41fLta1ZgHlY9mhu16H0ugQVRu/pub?embedded=true"
  } else {
    return <></>;
  }
};
export default cDocument;
