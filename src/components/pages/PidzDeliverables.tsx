import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Video = useRef(null);
  const Design = useRef(null);
  const Aanbevelingen = useRef(null);

  const executeScroll = (reference: any, offset?: number) => {
    if (typeof offset === "undefined") {
      offset = 0;
    }
    scrollToRef(reference, offset);
  };
  return (
    <>
      <div className="o-pagenav">
        <div className="o-pagenav__nav" onClick={() => window.history.back()}>
          <FontAwesomeIcon icon={faArrowLeft} /> <i>Ga terug</i>
        </div>

        <div>
          <button onClick={() => executeScroll(Video, 120)}>Video</button>
        </div>
        <div>
          <button onClick={() => executeScroll(Design, 120)}>Design</button>
        </div>
        <div>
          <button onClick={() => executeScroll(Aanbevelingen, 120)}>
            Aanbevelingen
          </button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>
      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <h1>Deliverables</h1>
            <div ref={Video}>
              <h2>Video</h2>
              <p>
                Een van de deliverables, is een video waarin de prototypes
                worden weergegeven. Hier is mijn bijdrage het deel van het Delen
                van Kennis gedeelte.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=HrVwj1Vyy1U&feature=youtu.be"
              >
                https://www.youtube.com/watch?v=HrVwj1Vyy1U&feature=youtu.be
              </a>
            </div>
            <div ref={Design}>
              <h2>Design</h2>
              <p>Een van de deliverables is het gevalideerde ontwerp. </p>
              <p>
                Het eindresultaat is te vinden in dit{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1gmzZwL026u-SovqFRmTkm6DAZCtOlIun/view?usp=sharing"
                >
                  <i>adobe XD bestand (download)</i>
                </a>{" "}
                of{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://xd.adobe.com/view/a72aa389-60a2-4b96-7ca7-08a28518c6a0-d11b/"
                >
                  <i>adobe XD klikbaar</i>
                </a>
              </p>
            </div>
            <div ref={Aanbevelingen}>
              <h2>Aanbevelingen</h2>
              <p>Daarnaast zijn er Aanbevelingen voor de opdrachtgever</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};
export default Page;
