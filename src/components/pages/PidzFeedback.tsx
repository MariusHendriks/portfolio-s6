import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Zoom from "react-medium-image-zoom";
import Feedback from "../../img/FeedForward.png";
import FeedbackMax from "../../img/feedbackmax.png";
import FeedbackBart from "../../img/feedbackbart.png";
import FeedbackDylano from "../../img/feedbackdylano.png";
import FeedbackMike from "../../img/feedbackmike.png";
import FeedbackGiven from "../../img/FeedForwardGiven.png";

const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Aanleiding = useRef(null);
  const Methode = useRef(null);
  const Resultaat = useRef(null);
  const Verantwoording = useRef(null);
  const Reflectie = useRef(null);
  const FeedbackOut = useRef(null);

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
          <button onClick={() => executeScroll(Verantwoording, 120)}>
            Verantwoording
          </button>
          <button onClick={() => executeScroll(Reflectie, 120)}>
            Reflectie
          </button>
          <button onClick={() => executeScroll(FeedbackOut, 120)}>
            Gegeven feedback
          </button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>
      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <h1>Feedback</h1>
            <div ref={Aanleiding}>
              <h2>Aanleiding</h2>
              <p>
                Om een betere student, groepswerker, leider en professional te
                worden, is er feedback gevraagd aan elkaar en aan elkaar
                gegeven.
              </p>
            </div>
            <div ref={Methode}>
              <h2>Methode</h2>
              <h3>Peer feedback</h3>
              <p>
                Er is voor deze manier gekozen omdat we op deze manier van
                elkaar kunnen leren, er achter komen wat onze sterke en zwakke
                punten zijn en het zorgt voor professionaliteit.
              </p>
            </div>
            <div ref={Resultaat}>
              <h2>Resultaat</h2>
              <p>De volgende feedback is ontvangen</p>
              <div className="s-page__content__img__container__img">
                <h3>Ontvangen feedback</h3>
                <Zoom>
                  <img
                    className="s-page__content__img__full"
                    alt="Feedback"
                    src={Feedback}
                  />
                </Zoom>
              </div>
            </div>
            <div className="s-page__content__img__container">
              <div className="s-page__content__img__container__img">
                <h3>Feedback Max</h3>
                <Zoom>
                  <img
                    className="s-page__content__img__full"
                    alt="Lange antwoorden"
                    src={FeedbackMax}
                  />
                </Zoom>
              </div>
              <div className="s-page__content__img__container__img">
                <h3>Feedback Bart</h3>
                <Zoom>
                  <img
                    className="s-page__content__img__full"
                    alt="hondert comments"
                    src={FeedbackBart}
                  />
                </Zoom>
              </div>
            </div>
            <div className="s-page__content__img__container">
              <div className="s-page__content__img__container__img">
                <h3>Feedback Dylano</h3>
                <Zoom>
                  <img
                    className="s-page__content__img__full"
                    alt="Lange antwoorden"
                    src={FeedbackDylano}
                  />
                </Zoom>
              </div>
              <div className="s-page__content__img__container__img">
                <h3>Feedback Mike</h3>
                <Zoom>
                  <img
                    className="s-page__content__img__full"
                    alt="hondert comments"
                    src={FeedbackMike}
                  />
                </Zoom>
              </div>
            </div>
            <div ref={Verantwoording}>
              <h2>Verantwoording</h2>
              <p>
                Er is feedback ontvangen en gegeven aan Max Altena, Dylano
                Hartman, Mike Hendriks en Bart van de Klundert.
              </p>
            </div>
            <div ref={Reflectie}>
              <h2>Reflectie</h2>
              <p>
                Over het algemeen vond ik de ontvangen feedback erg positief. Ik
                was het ook erg eens met wat er gezegd werd. De punten over
                motivatie zou ik persoonlijk niet zien als 'weinig motivatie',
                maar meer aan hoog klaag niveau. Ik klaag relatief veel als ik
                met onderdelen bezig ben waarvan ik het op dat moment nutteloos
                vind, en dat laat ik dus ook aan de docenten en mede-studenten
                merken. Ik ga er op letten in de toekomst dat de frustraties die
                ik uit niet storend zijn voor de mensen om me heen, en daarbij
                pas klagen als ik de opdrachten heb gemaakt. Want meestal zie ik
                het nut van de opdracht als ik hem gemaakt heb.
              </p>
            </div>
            <div ref={FeedbackOut}>
              <h2>Gegeven feedback</h2>
              <p>De volgende feedback is gegeven:</p>
              <div className="s-page__content__img__container__img">
                <h3>Gegeven feedback</h3>
                <Zoom>
                  <img
                    className="s-page__content__img__full"
                    alt="Feedback"
                    src={FeedbackGiven}
                  />
                </Zoom>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};
export default Page;
