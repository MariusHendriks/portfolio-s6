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
  const Probleem = useRef(null);
  const Conclusie = useRef(null);
  const Doel = useRef(null);

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
          <button onClick={() => executeScroll(Probleem, 120)}>Probleem</button>
          <button onClick={() => executeScroll(Doel, 120)}>Doel</button>
          <button onClick={() => executeScroll(Conclusie, 120)}>
            Conclusie
          </button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>
      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <h1>Individuele analyse</h1>
            <div ref={Aanleiding}>
              <h2>Aanleiding</h2>
              <p>
                Om een goede analyse van de opdracht te maken, kan een
                individuele analyse bijdragen aan het denkproces van de groep.
              </p>
            </div>
            <div ref={Probleem}>
              <h2>Probleem</h2>
              <p>
                De problemen die opgelost kunnen worden met het gekozen
                onderwerp zijn:
              </p>
              <ul className="c-double-ul">
                <li>
                  Contact met collega’s. De ZZP’ers missen het verbonden zijn
                  met collega’s. Door het onderling delen van kennis zal er
                  contact gelegd moeten worden tussen de ZZP’ers omdat er vragen
                  gesteld en beantwoord worden door de ZZP’ers zelf.
                </li>
                <li>
                  Groepen vormen. De ZZP’ers voelen zich nooit deel van een
                  team. Doordat er vragen gesteld en beantwoord kunnen worden,
                  zullen er wellicht groepen met gedeelde interesses, ervaring
                  en kennis ontstaan.
                </li>
                <li>
                  Een compliment ontvangen. Dit is iets wat de ZZP’ers fijn
                  vinden om te horen van andere ZZP’ers, en kan zeker terugkomen
                  in een platform waar kennis gedeelt wordt.
                </li>
                <li>PIDZ heeft nog geen unieke punten.</li>
              </ul>
              <p>
                Deze problemen zijn gebaseerd op het onderzoek dat gemaakt is
                door PIDZ en gedeelt is met de studenten.
              </p>
            </div>
            <div ref={Doel}>
              <h2>Doel</h2>
              <p>
                Het doel van dit project is een deel van het wij-PIDZ product
                uitwerken tot een getest prototype. Dit moet worden gedaan met
                de branding van PIDZ. Op basis van onderzoek zal er gekeken
                worden waar PIDZ in kan uitstralen met het nieuwe product
                tegenover haar concurrenten.
              </p>
            </div>
            <div ref={Conclusie}>
              <h2>Conclusie</h2>
              <p>
                Door deze analyse te maken, is er al enig idee wat er onderzocht
                moet gaan worden. Het is nu duidelijker wat de problemen en
                mogelijke opstakels zijn.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};
export default Page;
