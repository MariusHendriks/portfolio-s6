import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import pidzPOC from "../../img/pidzPOC.png";
import SWOT from "../../img/swot.png";
import Zoom from "react-medium-image-zoom";

const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Aanleiding = useRef(null);
  const Concept = useRef(null);
  const Verantwoording = useRef(null);
  const Conclusie = useRef(null);
  const USP = useRef(null);
  const Uitwerking = useRef(null);

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
          <button onClick={() => executeScroll(Concept, 120)}>Concept</button>
          <button onClick={() => executeScroll(USP, 120)}>USP</button>
          <button onClick={() => executeScroll(Verantwoording, 120)}>
            Verantwoording
          </button>
          <button onClick={() => executeScroll(Conclusie, 120)}>
            Conclusie
          </button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>
      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <h1>Concept document</h1>
            <div ref={Aanleiding}>
              <h2>Aanleiding</h2>
              <p>
                Dit document is gemaakt zodat er op een snelle manier
                presenteerbare concepten gemaakt worden voor de opdrachtgever.
              </p>
            </div>
            <div ref={Concept}>
              <h2>Concept</h2>
              <p>
                Het onderdeel dat door Dylano Hartman, Max Altena en mij wordt
                opgepakt is ‘Het onderling delen van kennis en zelfstandige
                zorgprofessionals in contact stellen met elkaar.’ Meet hierover
                in het project plan (klik daarvoor{"  "}
                <Link to="/page/PidzProjectPlan">hier</Link>)
              </p>
              <p>
                Wat op dit moment voor ogen was, was een mix tussen reddit en
                stackoverflow, voor alle vragen voor de ZZP’ers in de zorg. De
                onderzoeksresultaten van de trendanalyse (klik daarvoor{"  "}
                <Link to="/page/PidzTrendAnalyse">hier</Link>) en de
                concurrentieanalyse zijn gebruikt als punten in de gemaakte
                proof of concept.
              </p>
            </div>
            <div ref={Uitwerking}>
              <h2>Uitwerking</h2>
              <p>
                Er is inspiratie voor de layout van reddit gehaald, omdat dit
                een prettige en directe manier van interactie is. Daarnaast is
                het puntensysteem van stackoverflow ‘geleend’ omdat daar een
                duidelijke, to the point, systeem is.
              </p>
              <p>
                Het eindresultaat is te vinden in dit{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1gmzZwL026u-SovqFRmTkm6DAZCtOlIun/view?usp=sharing"
                >
                  <i>adobe xd bestand (download)</i>
                </a>{" "}
                of{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://xd.adobe.com/view/a72aa389-60a2-4b96-7ca7-08a28518c6a0-d11b/"
                >
                  <i>adobe xd klikbaar</i>
                </a>
              </p>
            </div>
            <div className="s-page__content__img__container">
              <div className="s-page__content__img__container__img">
                <h3>Proof of concept</h3>
                <Zoom>
                  <img
                    className="s-page__content__img__full"
                    alt="Poc"
                    src={pidzPOC}
                  />
                </Zoom>
              </div>
            </div>

            <p>
              Er is rekening gehouden met de onderzoeksresultaten van de
              concurrentieanalyse en de trendanalyse. Dat waren de volgende
              punten:
            </p>
            <p>
              <ul className="c-double-ul">
                <li>
                  Generieke vragen al beantwoord hebben. Dit is aangepakt door
                  de F.A.Q.op de pagina te hebben.
                </li>
                <li>
                  Tips geven over hoe ze bijvoorbeeld een goede cv maken (een
                  van de benoemde punten). Dit kan beter opgepakt worden door de
                  opleidingen, of er kunnen wellicht guides opgesteld worden die
                  in stappen uitlegt hoe je bijvoorbeeld een goede cv maakt.
                </li>
                <li>
                  Karma/punten/leaderboard systeem creëren wat ervoor kan zorgen
                  dat mensen actief reageren. Het nummer in goud, zilver of
                  brons impliceert hoeveel karmapunten de gebruikers hebben.
                </li>
              </ul>
            </p>
            <div ref={USP}>
              <h2>Unique Selling Points</h2>

              <p>
                Om duidelijk te krijgen waar de sterke punten, zwakke punten,
                mogelijkheden en gevaren zijn van het product, is een SWOT
                analyse gemaakt.
              </p>
              <div className="s-page__content__img__container">
                <div className="s-page__content__img__container__img">
                  <h3>SWOT analyse</h3>
                  <Zoom>
                    <img
                      className="s-page__content__img__full"
                      alt="hondert comments"
                      src={SWOT}
                    />
                  </Zoom>
                </div>
              </div>
              <p>
                Op facebook zijn er al groepen met tienduizenden leden voor
                specifiek zzp’ers in de zorg. Hierdoor is het mogelijk dat de
                zzp’ers daar niet van af zullen stappen.
              </p>
              <h3>Unique selling point</h3>
              <p>
                Er is een USP opgesteld om in één zin te vertellen wat het
                product is, doet en betekent voor de zzp’ers in de zorg.
              </p>
              <p className="quote">ZZP’ers in de zorg, zorgen voor elkaar</p>
              <p>
                Dit product is gemaakt voor zzp’ers die elkaar kunnen helpen
                door vragen van elkaar te beantwoorden, en zelf de mogelijkheid
                hebben vragen te kunnen stellen. Met deze USP is het direct
                duidelijk voor de ZZP’ers dat het gaat om een product voor hen,
                waar ze zelf elkaar helpen.
              </p>
            </div>
            <div ref={Verantwoording}>
              <h2>Verantwoording</h2>
              <p>
                Dit gehele conceptdocument- en Proof of Concept zijn gemaakt
                door mij.
              </p>
            </div>
            <div ref={Conclusie}>
              <h2>Conclusie</h2>
              <p>
                Door deze proof of concept is het concept concreter en visueler
                geworden. Er is een basis waarmee het concept kan worden
                doorontwikkeld. Omdat een ontwerp beter te begrijpen is dan
                tekst, kan er betere feedback verwacht worden op het concept.
                Daarnaast is het duidelijk geworden wat het product uniek maakt,
                en wat de sterkten, zwakten, kansen en bedreigingen zijn. Dit
                wordt allemaal meegenomen in verdere fases van het project.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};
export default Page;
