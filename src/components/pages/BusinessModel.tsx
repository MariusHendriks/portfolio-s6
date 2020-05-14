import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import ValuePropCanv1 from "../../img/ValuePropositionCanvas1.png";
import ValuePropCanv2 from "../../img/ValuePropositionCanvas2.png";
import ValuePropCanv3 from "../../img/ValuePropositionCanvas3.png";
import BusinessModelCanvas from "../../img/BusinessModelCanvas.png";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
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

  const executeScroll = (reference: any, offset?: number) => {
    if (typeof offset === "undefined") {
      offset = 0;
    }
    scrollToRef(reference, offset);
  };

  const Aanleiding = useRef(null);
  const Uitvoering = useRef(null);
  const Verantwoording = useRef(null);
  const Resultaat = useRef(null);
  const Interview = useRef(null);

  const Player = () => (
    <AudioPlayer src={require("../../audio/gesprek_ishan.mp3")} />
  );

  return (
    <>
      <div className="o-pagenav">
        <div className="o-pagenav__fill">
          <div className="o-pagenav__nav" onClick={() => window.history.back()}>
            <FontAwesomeIcon icon={faArrowLeft} /> <i>Ga terug</i>
          </div>
        </div>
        <div>
          <button onClick={() => executeScroll(Aanleiding, 120)}>
            Aanleiding
          </button>
          <button onClick={() => executeScroll(Uitvoering, 120)}>
            Uitvoering
          </button>
          <button onClick={() => executeScroll(Interview, 120)}>
            Interview
          </button>
          <button onClick={() => executeScroll(Verantwoording, 120)}>
            Verantwoording
          </button>

          <button onClick={() => executeScroll(Resultaat, 120)}>
            Resultaat
          </button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>
      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <h1>Business model</h1>
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
              <div ref={Uitvoering}>
                <h2>Uitvoering</h2>
                <p>
                  Om tot een goed business model gekomen is er een workshop
                  gevolgd, gegeven door Bob Nieme, eigenaar van Data streams.
                  Daarnaast heb ik van Frank Laarakker (director product manager
                  van Philips) een uitgebreide uitleg gehad over het business
                  model canvas. Als laatst is er feedback en extra uitleg
                  gevraagd aan Michiel Groenemeijer.
                </p>
                <p>
                  Er werd een tip gegeven om de financiële status te vragen aan
                  de stichting. Dit is gedaan met een telefoongesprek.
                </p>
                <h3 ref={Interview}>Interview Ihsan De Jong</h3>
                <p>
                  Er is toestemming voor het opnemen en gebruiken voor doeleinde
                  van het gesprek.
                </p>
                <p>
                  Om het business model accurater te maken is er een interview
                  gehouden met Ihsan De Jong van Stichting ik Wil. Er zijn
                  vragen gesteld over de financiële status van stichting Ik Wil,
                  hoe ze aan geld komen en wat hij de waarde vind van het
                  product.
                </p>
                <p>
                  <Player />
                </p>
                <p>
                  Uit dit gesprek zijn een resultaten gekomen die relevant
                  kunnen zijn voor het business model. Er staan timestamps bij
                  om te bekijken waar in de opname dit verteld werd.
                </p>
                <ul className="c-double-ul">
                  <li>
                    Stichting ik wil komt rond door fondsen (bijvoorbeeld
                    Oranjefonds), en de gemeente. (03:38)
                  </li>
                  <li>
                    Stichting ik wil moet zorgen dat ze resultaat leveren. Ze
                    moeten laten zien dat ze opgestelde doelen behalven van
                    activiteiten. (08:25)
                  </li>
                  <li>
                    Ihsan zou het dashboard schatte het dashboard rond de 10.000
                    euro voor eenmalige bouwkosten, en 700 euro per jaar voor
                    onderhoudt. (13:50)
                  </li>
                  <li>
                    Omdat het dashboard online gedeeld kan worden vermoed Ihsan
                    dat de wat technisere mensen van de doelgroep beter bereikt
                    kunnen worden (15:00).
                  </li>
                </ul>
                <p>
                  Met deze resultaten is het business model canvas aangepast.
                </p>
              </div>
              <div ref={Verantwoording}>
                <h2>Verantwoording</h2>
                <p>
                  Deze pagina is enkel door mij gemaakt. Er is geen fusie
                  geweest van business modellen. De resultaten van mijn gesprek
                  met Ihsan is gedeeld met mijn groep.
                </p>
              </div>
              <div ref={Resultaat}>
                <h2>Resultaat</h2>
                Dit business model canvas is gemaakt met eronder een value
                proposition canvas van de bezoeker en de coördinator/kartrekker.
                <div>
                  <h3>Business Model Canvas</h3>
                  <Zoom>
                    <img
                      className="s-page__content__img__full"
                      alt="Business model canvas"
                      src={BusinessModelCanvas}
                    />
                  </Zoom>
                </div>
                <div className="s-page__content__img__container">
                  <div className="s-page__content__img__container__img">
                    <h3>Het dashboard</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Value propersition voor dashboard"
                        src={ValuePropCanv1}
                      />
                    </Zoom>
                  </div>
                  <div className="s-page__content__img__container__img">
                    <h3>Bezoeker</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Value proposition voor bezoeker"
                        src={ValuePropCanv2}
                      />
                    </Zoom>
                  </div>
                  <div className="s-page__content__img__container__img">
                    <h3>Coördinator / begeleider</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Value proposition voor begeleider"
                        src={ValuePropCanv3}
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
