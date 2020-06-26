import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Aanleiding = useRef(null);
  const Design = useRef(null);
  const Video = useRef(null);
  const Adviesrapport = useRef(null);
  const Verantwoording = useRef(null);

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
          <button onClick={() => executeScroll(Aanleiding, 120)}>
            Aanleiding
          </button>
          <button onClick={() => executeScroll(Design, 120)}>Design</button>
          <button onClick={() => executeScroll(Video, 120)}>Video</button>
          <button onClick={() => executeScroll(Adviesrapport, 120)}>
            Adviesrapport
          </button>
          <button onClick={() => executeScroll(Verantwoording, 120)}>
            Verantwoording
          </button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>
      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <h1>Deliverables</h1>
            <div ref={Aanleiding}>
              <h2>Aanleiding</h2>
              <p>
                Deze pagina is gemaakt om een opsomming te maken van de
                deliverables, en om een plek te creeëren waar geen aparte pagina
                voor nodig was.
              </p>
            </div>
            <div ref={Design}>
              <h2>Design</h2>
              <p>
                De eerste Deliverable is een ontwerp. Deze is uitgebreid te
                bekijken op de ontwerp pagina (
                <Link
                  to="/page/PidzOntwerpen
                "
                >
                  Link naar Ontwerp pagina
                </Link>
                ).
              </p>
              <p>
                Het eindresultaat is te vinden in dit{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1o-vYrQykUjvX8Pxo_9YYJAFNAu6t-qpK/view?usp=sharing"
                >
                  <i>adobe XD bestand (download)</i>
                </a>{" "}
                of{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://xd.adobe.com/view/faa42e85-6263-422b-7a25-7186a00886c7-8c95/?fullscreen&hints=off"
                >
                  <i>adobe XD klikbaar</i>.
                </a>
              </p>
            </div>
            <div ref={Video}>
              <h2>Video</h2>
              <p>
                Er is een video gemaakt waar de prototypes in worden uitgelegd.
              </p>
              <p>
                De video is te vinden op{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://youtu.be/HrVwj1Vyy1U"
                >
                  deze youtube video.
                </a>
              </p>
            </div>
            <div ref={Adviesrapport}>
              <h2>Adviesrapport</h2>
              <p>Er is een uitgebreid adives rapport opgesteld.</p>
              <p>
                De is te vinden op{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://docs.google.com/document/d/18CDEe6Pf5EhB5r3azcfRIpL8-jm6IzIlSznYHjGsFjc/edit?usp=sharing"
                >
                  deze link
                </a>
              </p>
            </div>
            <div ref={Verantwoording}>
              <h2>Verantwoording</h2>
              <p>De deliverables zijn gemaakt door de gehele groep.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};
export default Page;
