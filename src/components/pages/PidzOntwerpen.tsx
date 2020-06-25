import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Zoom from "react-medium-image-zoom";
import DifChat from "../../img/difchat.png";
import DifProfile from "../../img/difprofile.png";

import PidzHome from "../../img/PidzHome.png";
import PidzChat1 from "../../img/PidzChat1.png";
import PidzChat2 from "../../img/PidzChat2.png";
import PidzProfile from "../../img/PidzProfiel.png";
import { Link } from "react-router-dom";
const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Aanleiding = useRef(null);
  const Methode = useRef(null);
  const Verantwoording = useRef(null);
  const Conclusie = useRef(null);
  const Resultaat = useRef(null);
  const Uitprobeersels = useRef(null);

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
          <button onClick={() => executeScroll(Methode, 120)}>Methode</button>
          <button onClick={() => executeScroll(Resultaat, 120)}>
            Resultaat
          </button>

          <button onClick={() => executeScroll(Uitprobeersels, 120)}>
            Uitprobeersels
          </button>
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
            <h1>Ontwerpen</h1>
            <div ref={Aanleiding}>
              <h2>Aanleiding</h2>
              <p>
                Het ontwerp is een van de deliverables van het project. Er is
                geïtereerd met de resultaten van de usability test (
                <Link to="/page/PidzUsabilityTest">
                  Link naar Usability testing
                </Link>
                )
              </p>
            </div>
            <div ref={Methode}>
              <h2>Methode</h2>
              <h3>Ontwerp</h3>
              <p>
                Er is een ontwerp gemaakt met Adobe XD. Hiervoor is gekozen
                omdat ik zelf prettig werk met Adobe XD en snel veel iteraties
                kan maken. Ook kun je met Adobe XD goed prototypes testen. Dit
                was erg handig om de usability mee te testen in een later
                stadium.
              </p>
              <h3>Versies</h3>
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
                  <i>adobe XD klikbaar</i>
                </a>
              </p>
            </div>
            <div ref={Resultaat}>
              <h2>Resultaat</h2>
              <p>
                Er zijn meerdere iteraties geweest. Hieronder is de laatste
                versie van het prototype te vinden met eronder waarom het er op
                deze manier uit ziet.
              </p>
              <p>
                De algemene balken, kleuren, lettertypes en components zijn
                gebaseerd op de guidelines van PIDZ (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://projects.invisionapp.com/dsm/smiling-gents/pidz-design-system/"
                >
                  Link naar design guidelines van PIDZ
                </a>
                )
              </p>
              <div>
                <div className="s-page__content__img__container">
                  <div className="s-page__content__img__container__img">
                    <h3>Homepage</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Home"
                        src={PidzHome}
                      />
                    </Zoom>
                    <p>
                      De homepage is gebaseerd op het proof of concept (
                      <Link to="/page/PidzConceptDocument">
                        Link naar concept document
                      </Link>
                      ). Het concept is vrijwel intact gebleven, het is er
                      alleen wat gelikter uit gaan zien. De componenten zijn
                      geïnspireerd van Stackoverflow en Reddit.
                    </p>
                  </div>
                  <div className="s-page__content__img__container__img">
                    <h3>Profiel</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Profiel"
                        src={PidzProfile}
                      />
                    </Zoom>
                    <p>
                      De manier waarop de berichten worden weergegeven is
                      geïnspireerd van Stackoverflow. De algehele opbouw van het
                      profiel is geïnspireerd van Facebook.
                    </p>
                  </div>
                </div>
                <div className="s-page__content__img__container">
                  <div className="s-page__content__img__container__img">
                    <h3>Chat menu</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Chat"
                        src={PidzChat1}
                      />
                    </Zoom>
                    <p>
                      Ook de chat is geïnspireerd van facebook omdat deze voor
                      een website een ontzettend goed werkende chat hebben.
                    </p>
                  </div>
                  <div className="s-page__content__img__container__img">
                    <h3>Chat</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Chat"
                        src={PidzChat2}
                      />
                    </Zoom>
                    <p>
                      Zo ziet de chat eruit in gesprek, met bovenin informatie
                      over de persoon waarmee je een gesprek hebt.
                    </p>
                  </div>
                </div>
              </div>
              <div ref={Uitprobeersels}>
                <h2>Uitprobeersels</h2>
                <p>
                  Er zijn verschillende dingen uitgeprobeerd om tot een uniek en
                  beter ontwerp te komen. Geen ontwerp is gemaakt zonder
                  iteraties.
                </p>
                <div className="s-page__content__img__container">
                  <div className="s-page__content__img__container__img">
                    <h3>Profiel</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Chat"
                        src={DifProfile}
                      />
                    </Zoom>
                    <p>
                      Hier was een simpele visuele upgrade door gebruik te maken
                      van iconen. Op deze manier zag het er direct een stuk
                      beter uit.
                    </p>
                  </div>
                  <div className="s-page__content__img__container__img">
                    <h3>Chat</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Chat"
                        src={DifChat}
                      />
                    </Zoom>
                    <p>
                      Er is geëxperimenteerd met de chat de linkerbalk te laten
                      vervangen. Na een gesprek met de opdrachtgever en de groep
                      zijn we tot de conclusie gekomen dat dit simpelweg niet
                      handig in gebruik is omdat je niet door het menu kan
                      navigeren terwijl je een chat open hebt.
                    </p>
                  </div>
                </div>
              </div>
              <div ref={Verantwoording}>
                <h2>Verantwoording</h2>
                <p>
                  Het concept voor het ontwerp is een resultaat van een fuzie
                  van de gemaakte proof of concepts die door Dylano Hartman, Max
                  Altena en mij gemaakt zijn. Er was door de proof of concepts
                  ook al duidelijk wat er in het ontwerp moest komen, en de
                  rollen zijn verdeelt.
                </p>
                <p>
                  Ik heb de chat en de profiel pagina gemaakt. Daarnaast is de
                  homepagine in een redesign van mijn proof of concept.
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
