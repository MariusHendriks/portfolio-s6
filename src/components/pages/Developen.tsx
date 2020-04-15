import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import GhDev from "../../img/gh_dev.png";
import Dev from "../../img/dev.png";
import XD from "../../img/xd.png";
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
  const GebruikteTalen = useRef(null);
  const Verantwoording = useRef(null);
  const Werkwijze = useRef(null);
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
          <button onClick={() => executeScroll(GebruikteTalen, 120)}>
            Gebruikte talen
          </button>
          <button onClick={() => executeScroll(Werkwijze, 120)}>
            Werkwijze
          </button>
          <button onClick={() => executeScroll(Verantwoording, 120)}>
            Verantwoording
          </button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>
      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <h1>Developen</h1>
            <div>
              {" "}
              <div ref={Aanleiding}>
                <h2>Aanleiding</h2>
                <p>
                  Dit product is gemaakt omdat er voor gekozen is een
                  gerealiseerd product op te leveren aan de opdrachtgever.
                </p>
              </div>
              <div ref={GebruikteTalen}>
                <h2>Gebruikte talen</h2>
                <p>
                  Er is in dit project met React Typescript, SCSS, Firebase en
                  Redux gewerkt. De reden hiervoor is omdat de delen React en
                  SCSS al bekend waren. Van Firebase en Redux was de basis
                  bekend, en dit was een goede mogelijkheid daar meer in te
                  verdiepen.
                </p>
                <h3>React</h3>
                <p>
                  Er is voor react gekozen omdat hier al enige ervaring in was,
                  het extreem snel is en er op een gestructureerde manier
                  modulair in gewerkt kan worden.
                </p>
                <h3>Typescript</h3>
                <p>
                  Er is voor typescript react gekozen omdat het een kleine
                  upgrade is van normaal React. Omdat je veel types moet
                  definiëren legt de code zichzelf beter uit. Daarnaast was het
                  leerzaam om typescript te gebruiken.
                </p>
                <h3>Redux</h3>
                <p>Redux is de go-to store manager van React.</p>
                <h3>SCSS</h3>
                <p>
                  Er is SCSS gebruikt om breder en efficiënter met SCSS te
                  kunndne werken.
                </p>
                <h3>Firebase</h3>
                <p>
                  Er is voor Firebase gekozen omdat je met firebase sne,
                  schaalbare apps kunt bouwen, zonder de gehele infrastructuur
                  op te zetten. Daarnaast is firebase ontzettend betrouwbaar en
                  snel.
                </p>
              </div>
              <div ref={Werkwijze}>
                <h2>Werkwijze</h2>
                <p>
                  Er is gestructureerd gewerkt met Github. Er zijn veel branches
                  gebruikt om het overzicht te behouden welke code waar werd
                  toegevoegd. Om de code qualiteit hoog te houden zijn er code
                  reviews gehouden.
                </p>
              </div>
              <div ref={Verantwoording}>
                <h2>Verantwoording</h2>
                <p>
                  De backend is geschreven door mij. De frontend is geschreven
                  door Bart van de Klundert en Mike Hendriks. Er is 3 weken, 32+
                  uur per week per groepslid aan gewerkt.
                </p>
                <p>
                  Alle code, commits, versies en issues zijn te vinden op Github
                </p>
                <p>Alle versies van het prototype zijn te vinden op Github.</p>
                <a
                  href="https://github.com/MariusHendriks/sigaar-pagebuilder-prototype-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="c-gh-img"
                    src={GhDev}
                    alt="Github development"
                  ></img>
                </a>
                <p>De laatste versie van het project draait op pagina.</p>
                <div className="s-page__content__img__container">
                  <div className="s-page__content__img__container__img">
                    <h3>Live-versie</h3>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://ikwil-dashboard.web.app/"
                    >
                      <img
                        className="s-page__content__img__full"
                        alt="Development"
                        src={Dev}
                      />
                    </a>
                  </div>
                  <div className="s-page__content__img__container__img">
                    <h3>Laatste versie ontwerp</h3>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://xd.adobe.com/view/f8d8aeb1-3988-41b4-7275-c51e055d1130-8ee9/"
                    >
                      <img
                        className="s-page__content__img__full"
                        alt="Adobe xd"
                        src={XD}
                      />
                    </a>
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
