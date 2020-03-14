import React, { useState, useRef } from "react";
import { usePdf } from "@mikecousins/react-pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface Props {
  docName: string | undefined;
}
function getScale() {
  if (window.innerWidth <= 1920) {
    return 1.22;
  } else if (window.innerWidth <= 2560) {
    return 1.62;
  }
}
const PDF: React.FC<Props> = ({ docName }) => {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);
  let file = require(`../../documents/GeenDocument.pdf`);
  if (typeof docName !== "undefined") {
    file = require(`../../documents/${docName}.pdf`);
  }
  const scale = getScale();
  const { pdfDocument } = usePdf({
    file: file,
    page,
    canvasRef,
    scale: scale
  });
  if (docName !== "undefined") {
    return (
      <div className="s-pdf">
        {!pdfDocument && <span>Loading...</span>}
        <canvas ref={canvasRef} />
        {Boolean(pdfDocument && pdfDocument.numPages) && (
          <div className="s-pdf__buttons">
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              disabled={page === pdfDocument.numPages}
              onClick={() => setPage(page + 1)}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        )}
      </div>
    );
  } else {
    return <>No pdf name inserted...</>;
  }
};
export default PDF;
