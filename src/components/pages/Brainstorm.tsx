import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import Brainstorm1 from "../../img/brainstorm1.jpg";
import Brainstorm2 from "../../img/brainstorm2.jpg";
import Brainstorm3 from "../../img/brainstorm3.jpg";
import Brainstorm4 from "../../img/brainstorm4.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Aanleiding = useRef(null);
  const Uitvoering = useRef(null);
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
        <div className="o-pagenav__nav" onClick={() => window.history.back()}>
          <FontAwesomeIcon icon={faArrowLeft} /> <i>Ga terug</i>
        </div>
        <div>
          <button onClick={() => executeScroll(Aanleiding, 120)}>
            Aanleiding
          </button>
          <button onClick={() => executeScroll(Uitvoering, 120)}>
            Uitvoering
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
            <h1>Brainstorm</h1>
            <div>
              <div ref={Aanleiding}>
                <h2>Aanleiding</h2>
                <p>
                  Omdat we het IDEO framework gebruikten, is er een brainstorm
                  sessie gehouden.
                </p>
              </div>
              <div ref={Uitvoering}>
                <h2>Uitvoering</h2>
                <p>
                  Met alle resultaten van de onderzoeken die gemaakt zijn in
                  duo's is heeft een brainstormsessie plaast gevonden. Per duo
                  is verteld wat de resultaten van het onderzoek waren, waar
                  vervolgens 10 minuten over is gebrainstormed. Daarna is alles
                  gecatogoriseerd wat bij elkaar hoorde en zijn alleen de
                  nuttige ideeën gebleven. Hieruit zijn "How might we" vragen
                  opgesteld. Die vragen waren:
                </p>
                <ol>
                  <li>
                    Hoe kunnen we het overzicht van activiteiten en
                    inschrijvingen duidelijk(er) maken?
                  </li>
                  <li>Hoe kunnen we het bereik van de stichting vergroten?</li>
                  <li>
                    Hoe kunnen we de eerste indruk van de stichting verbeteren?
                  </li>
                </ol>
                <p>
                  Per vraag werd 10 minten gebrainstormed over mogelijke
                  oplossingen. Van deze oplossingen gaf ieder zijn voorkeur aan
                  voor de meest haalbare, leuke en nuttige ideeën (gems). Daar
                  zijn vier ideeën aan overgebleven die in duo's uitgewerkt
                  zijn.
                </p>
              </div>
              <div ref={Verantwoording}>
                <h2>Verantwoording</h2>
                <p>
                  Max Altena leidde de workshop. De rest van de groep dacht mee.
                </p>
              </div>
              <div ref={Conclusie}>
                <h2>Conclusie</h2>
                <p>
                  Na deze brainstormsessie was duidelijk wat er in de volgende
                  weken (ideation fase) moest gebeuren. In duo's werden de
                  volgende ideeën uitgewerkt:
                </p>
                <ul className="c-double-ul">
                  <li>
                    <b>Een zonnestelsel.</b>
                    <br />
                    Dit idee zal de structuur van de stichting weergeven. Alles
                    in de stichting is opgedeeld in categorieën met elk hen
                    eigen activiteiten eronder. Dit zou visueel worden weergeven
                    in een soort zonnestelsel. Dit idee is opgepakt door{" "}
                    <i>Timo van de Laar</i>
                  </li>
                  <li>
                    <b>Een dashboard.</b>
                    <br />
                    Dit idee zal duidelijkheid geven in wat de stichting precies
                    te bieden heeft. De activiteiten van de komende week zullen
                    er op komen staan, wat voor eten er die dag is en welk
                    bestuur er die dag is. Dit idee is opgepakt door{" "}
                    <i>Max Altena en Mike Hendriks</i>
                    <br />
                  </li>
                  <li>
                    <b>Een page builder.</b> <br /> Dit idee helpt beginnende
                    bedrijven die veel in de stichting zitten te promoten door
                    eenvoudig een professionele website voor ze te genereren.
                    Dit idee is opgepakt door <i>mij en Bart van de Klundert</i>
                    <br />
                  </li>
                  <li>
                    <b>Een inschrijf-app.</b>
                    <br />
                    Dit idee helpt de leden van de stichting overzicht te
                    krijgen over welke activiteiten er bij de stichting zijn en
                    ze kunnen zich hier voor inschrijven. Dit idee is opgepakt
                    door <i>Noël Herwig en Dylano Hartman</i>
                    <br />
                  </li>
                </ul>

                <div className="s-page__content__img__container">
                  <div className="s-page__content__img__container__img">
                    <h3>Brainstorm</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="brainstorm"
                        src={Brainstorm1}
                      />
                    </Zoom>
                  </div>
                  <div className="s-page__content__img__container__img">
                    <h3>How might we</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="How might we"
                        src={Brainstorm2}
                      />
                    </Zoom>
                  </div>
                  <div className="s-page__content__img__container__img">
                    <h3>Gems</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Value proposition voor begeleider"
                        src={Brainstorm4}
                      />
                    </Zoom>
                  </div>
                  <div className="s-page__content__img__container__img">
                    <h3>Ideeën</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Value proposition voor begeleider"
                        src={Brainstorm3}
                      />
                    </Zoom>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};
export default Page;
