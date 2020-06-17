import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Zoom from "react-medium-image-zoom";
import BusinessModel1 from "../../img/pidzbusinessmodel1.png";
import BusinessModel2 from "../../img/pidzbusinessmodel2.png";
import BusinessModel3 from "../../img/pidzbusinessmodel3.png";
import BusinessModel4 from "../../img/pidzbusinessmodel4.png";
const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Aanleiding = useRef(null);
  const Resultaat = useRef(null);
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
          <button onClick={() => executeScroll(Resultaat, 120)}>
            Resultaat
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
            <h1>Business Model</h1>
            <div>
              <div ref={Aanleiding}>
                <h2>Aanleiding</h2>
                <p>
                  Deze pagina is gemaakt om de waarde van het gemaakte product
                  in te schatten. Dit is gedaan om te oefenen hoe dit zal gaan
                  gebeuren als het product echt verkocht zou worden. Er is
                  nagedacht over op wat voor manier het product verkocht kan
                  worden (bijvoorbeeld door een abonnement, of een eenmalige
                  aankoop), en wat de waarde van het product is voor de
                  opdrachtgever.
                </p>
              </div>
              <div ref={Resultaat}>
                <h2>Resultaat</h2>
                <div className="s-page__content__img__container">
                  <div className="s-page__content__img__container__img">
                    <h3>Business model canvas</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Lange antwoorden"
                        src={BusinessModel1}
                      />
                    </Zoom>
                  </div>
                  <div className="s-page__content__img__container__img">
                    <h3>Value map</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="hondert comments"
                        src={BusinessModel2}
                      />
                    </Zoom>
                  </div>
                </div>
                <div className="s-page__content__img__container">
                  <div className="s-page__content__img__container__img">
                    <h3>Value propesition canvas bemiddelaars</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Lange antwoorden"
                        src={BusinessModel3}
                      />
                    </Zoom>
                  </div>
                  <div className="s-page__content__img__container__img">
                    <h3>Value propesition canvas ZZP'ers</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="hondert comments"
                        src={BusinessModel4}
                      />
                    </Zoom>
                  </div>
                </div>
                <div>
                  <h3>Uitleg</h3>
                  <p>
                    Sommige kaartjes hebben wat uitleg nodig. Hieronder de
                    kaartjes met de uitelg.
                  </p>
                  <div>
                    <h3>Key Partnerships</h3>
                    <div>
                      <i>Fontys</i>
                      <div>
                        Fontys is een partner omdat het product door studenten
                        van Fontys gemaakt word. Nadat het product klaar is, is
                        Fontys niet meer een key partner
                      </div>
                    </div>
                    <div>
                      <i>Sponsoren</i>
                      <div>
                        Mochten er sponsoren komen die bijvoorbeeld hun reclames
                        op de website willen, zouden sponseren key partnerships
                        zijn.
                      </div>
                    </div>
                    <div>
                      <i>Experts in vakgebieden</i>
                      <div>
                        Pidz heeft aangegeven specialisten te willen die vragen
                        kunnen beantwoorden. Als Pidz dit daadwerkelijk gaat
                        doen, zijn de experts in vakgebieden een key
                        partnership.
                      </div>
                    </div>
                    <h3>Key activities</h3>
                    <div>
                      <i>Genoeg ZZP'ers om elkaars vragen te beantwoorden</i>
                      <div>
                        Om een werkend product te hebben, moeten er genoeg
                        gebruikers zijn om het relevant te houden.
                      </div>
                    </div>
                    <h3>Value propositions</h3>
                    <div>
                      <i>Vacatures op een plek waar ZZP'ers zijn</i>
                      <div>
                        Als het platform genoeg gebruikers heeft, kan het dé
                        plek worden waar recruiters en bemiddelaars hun
                        benodigde mensen vandaan kan halen.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div ref={Verantwoording}>
                <h2>Verantwoording</h2>
                <p>Dit gehele document is door mij gemaakt.</p>
              </div>
              <div ref={Conclusie}>
                <h2>Conclusie</h2>
                <p>
                  Door dit business model gemaakt te hebben, is er meer
                  duidelijkheid waar de gebruikers verbeting nodig hebben (door
                  de value propositions). Ook is er een goed overzicht wat er
                  nodig is om dit project succesvol voort te zetten.
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
