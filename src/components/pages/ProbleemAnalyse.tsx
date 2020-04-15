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
  const Analyse = useRef(null);
  const Verantwoording = useRef(null);
  const Conclusie = useRef(null);

  const executeScroll = (reference: any, offset?: number) => {
    if (typeof offset === "undefined") {
      offset = 0;
    }
    scrollToRef(reference, offset);
  };

  return (
    <>
      <div className="o-pagenav">
        <Link className="o-pagenav__fill" to="/">
          <FontAwesomeIcon icon={faArrowLeft} /> <i>Ga terug</i>
        </Link>
        <div>
          <button onClick={() => executeScroll(Aanleiding, 120)}>
            Aanleiding
          </button>
          <button onClick={() => executeScroll(Analyse, 120)}>Methode</button>
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
            <h1>Probleem Analyse</h1>
            <div>
              <div ref={Aanleiding}>
                <h2>Aanleiding</h2>
                <p>
                  Dit product is gemaakt om gestructureerd onderzoek te kunnen
                  doen.{" "}
                </p>
              </div>
              <div ref={Analyse}>
                <h2>Analyse</h2>
                <p>
                  Er was geen duidelijke probleemstelling zoals bij veel andere
                  projecten. Het was aan de groep om een probleem te zoeken,
                  onderzoeken of het echt een probleem was en het probleem
                  oplossen.
                </p>
                <p>
                  In de eerste fase zijn er direct meerdere problemen
                  geanalyseerd. Dat waren de volgende:
                </p>
                <ul className="c-double-ul">
                  <li>De organisatie is non-technisch</li>
                  <li>
                    Er is geen overzicht welke activiteiten er waren en hoe men
                    zich voor deze activiteiten kon aanmelden
                  </li>
                  <li>Het pand heeft geen goede uitstraling.</li>
                  <li>Er is niets van de branding terug te vinden.</li>
                  <li>Alles werd geregeld via tientallen whatsapp groepen</li>
                </ul>

                <p>
                  Met de groep is besproken de volgende hoofdvraag te
                  beantwoorden
                </p>
                <p>
                  “Hoe kunnen we een middel maken dat Stichting Ik Wil en/of hun
                  bezoekers helpt om duidelijkheid te creëren in termen van:
                  activiteiten, aanwezigheid van het bestuur en andere zaken
                  binnen de stichting”.
                </p>
              </div>
              <div ref={Verantwoording}>
                <h2>Verantwoording</h2>
                <p>Dit document is gemaakt door mij.</p>
              </div>
              <div ref={Conclusie}>
                <h2>Conclusie</h2>
                <p>
                  Met deze probleemanalyse kan er onderzocht worden of de
                  gemaakte hypotheses ook problemen zijn voor de bezoekers van
                  de stichting.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};
export default Page;
