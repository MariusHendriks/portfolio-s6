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

  const Aanleiding = useRef(null);
  const Opdracht = useRef(null);
  const Doel = useRef(null);
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
          <button onClick={() => executeScroll(Opdracht, 120)}>Opdracht</button>
          <button onClick={() => executeScroll(Doel, 120)}>Doel</button>
          <button onClick={() => executeScroll(Verantwoording, 120)}>
            Verantwoording
          </button>
          
        </div>
        <div className="o-pagenav__fill"></div>
      </div>
      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <h1>Projectplan</h1>
            <div ref={Aanleiding}>
              <h2>Aanleiding</h2>
              <p>
                Om gestructureerd het project door te gaan, is er een
                projectplan gemaakt. Er staat in wat de groep van plan is om te
                doen tijdens het project, wat er wel niet gaat gebeuren, welke
                onderzoeken er uitgevoerd gaan worden, een planning en
                afspraken.
              </p>
            </div>
            <div ref={Opdracht}>
              <h2>Opdracht</h2>
              <p>
                PIDZ wil een systeem maken wat diverse problemen van ZZP’ers in
                de zorg aanpakt. De oplossing hiervoor is WijPIDZ, een platform
                waarin de volgende onderdelen gedaan worden:
              </p>
              <p>
                <ul className="c-double-ul">
                  <li>Het aanbieden van betrouwbare artikelen van experts.</li>
                  <li>
                    Het onderling delen van kennis en zelfstandige
                    zorgprofessionals in contact stellen met elkaar.
                  </li>
                  <li>
                    Het makkelijker maken voor zelfstandige zorgprofessionals om
                    de juiste opleidingen en cursussen te vinden.
                  </li>
                </ul>
              </p>
              <p>
                Het onderdeel waar aan gewerkt wordt tijdens dit project is het
                onderling delen van kennis en zelfstandige professionals in
                contact stellen met elkaar. PIDZ hoopt met WijPIDZ zelfstandige
                zorgprofessionals te helpen verbinden met andere ZZP’ers en
                bemiddelaars.
              </p>
            </div>
            <div ref={Doel}>
              <h2>Doel</h2>
              <p>
                Het doel van dit project is om een deel van het WijPIDZ platform
                uit te werken tot een getest prototype. Dit gedeelte is het
                component voor het delen van kennis tussen gebruikers,
                zelfstandige zorgprofessionals, van het WijPIDZ platform. Er
                zullen USP’s (Unique Selling Points) zijn opgesteld voor het
                prototype waarmee het zichzelf differentieert van andere
                oplossingen en concurrenten. Het differentiëren in het prototype
                zal waarde voor het eindproduct opleveren.
              </p>
            </div>
            <div ref={Verantwoording}>
              <h2>Verantwoording</h2>
              <p>
                Dit document is gemaakt door Max Altena, Dylano Hartman en mij.
                De kopjes: "Opdracht", "Doelen", "Analyse", "Eisen", "Afsparken"
                in het document zijn door mij gemaakt.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};
export default Page;
