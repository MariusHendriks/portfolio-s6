import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Zoom from "react-medium-image-zoom";
import DifChat from "../../img/difchat.png";
import DifProfile from "../../img/difprofile.png";
import DifVink from "../../img/difvink.png";

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
  const Iteration1 = useRef(null);

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
          <button onClick={() => executeScroll(Iteration1, 120)}>
            Iteration
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
              <p>Dit word het eindproduct van dit project.</p>
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
                versie van het prototype te vinden met daarbij een opmerking
                waarom het er op deze manier uit ziet.
              </p>

              <div>
                <div className="s-page__content__img__container">
                  <div className="s-page__content__img__container__img">
                    <h3>Lange antwoorden</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Lange antwoorden"
                        src={DifChat}
                      />
                    </Zoom>
                  </div>
                  <div className="s-page__content__img__container__img">
                    <h3>100 comments</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="hondert comments"
                        src={DifProfile}
                      />
                    </Zoom>
                  </div>
                </div>
                <div className="s-page__content__img__container">
                  <div className="s-page__content__img__container__img">
                    <h3>Lange antwoorden</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Lange antwoorden"
                        src={DifVink}
                      />
                    </Zoom>
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
