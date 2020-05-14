import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import ProtoDev from "../../img/protoDEV.png";
import ProtoXD from "../../img/protoXD.png";
import GhProtoDev from "../../img/gh_protodev.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Aanleiding = useRef(null);
  const Method = useRef(null);
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
          <button onClick={() => executeScroll(Method, 120)}>Methode</button>
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
            <h1>Prototype ontwikkelen</h1>
            <div>
              <div ref={Aanleiding}>
                <h2>Aanleiding</h2>
                <p>
                  Dit product is gemaakt om beter te kunnen testen dan met een
                  Adobe XD klikbaar ontwerp. Er zitten ontzettend veel textboxen
                  in het product, wat volgens ons niet accuraat genoeg getest
                  kon worden met enkel het ontwerp.
                </p>
              </div>
              <div ref={Method}>
                <h2>Methode</h2>
                <h3>Quick prototype</h3>
                <p>
                  Het ontwerp is uitgewerkt met React Typescript. Dit is gedaan
                  omdat er al ervaring was met React, maar nog niet met
                  Typescript. Op deze manier kon er kennis worden opgedaan in
                  Typescript, en de ervaring van React gebruikt worden om snel
                  te kunnen werken.
                </p>

                <div className="s-page__content__img__container">
                  <div className="s-page__content__img__container__img">
                    <h3>Prototype developed</h3>
                    <a
                      href="https://keen-ride-e1953a.netlify.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <img
                        className="s-page__content__img__full"
                        alt="Presentatie"
                        src={ProtoDev}
                      />
                    </a>
                  </div>
                  <div className="s-page__content__img__container__img">
                    <h3>Prototype xD</h3>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://xd.adobe.com/view/82785a97-4146-4087-6a49-f162d10fa60f-f449/"
                    >
                      <img
                        className="s-page__content__img__full"
                        alt="Prototype xD"
                        src={ProtoXD}
                      />
                    </a>
                  </div>
                </div>
                <p>Alle versies van het prototype zijn te vinden op Github.</p>
                <a
                  href="https://github.com/MariusHendriks/sigaar-pagebuilder-prototype-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="c-gh-img"
                    src={GhProtoDev}
                    alt="Github prototype development"
                  ></img>
                </a>
                <p>
                  Omdat het een quick prototype is, is er geen rekening gehouden
                  met responsiveness
                </p>
              </div>
              <div ref={Verantwoording}>
                <h2>Verantwoording</h2>
                <p>
                  Het ontwerp is gemaakt door Bart van de Klundert, het gebouwde
                  product is gemaakt door mij.
                </p>
              </div>
              <div ref={Conclusie}>
                <h2>Conclusie</h2>
                <p>
                  Het maken van dit prototypen was erg nuttig om de user tests
                  beter uit te kunnen voeren.
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
