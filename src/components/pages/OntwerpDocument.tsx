import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BackButton from "../common/BackButton";
import { Link } from "react-router-dom";
import Iteratie11 from "../../img/iteratie-1-3.png";
import Iteratie12 from "../../img/iteratie-1-2.png";
import Iteratie21 from "../../img/iteratie-2-1.png";
import Iteratie22 from "../../img/iteratie-2-2.png";
import Iteratie23 from "../../img/iteratie-2-3.png";
import Iteratie24 from "../../img/iteratie-2-4.png";
import Iteratie31 from "../../img/iteratie-3-1.png";
import Iteratie32 from "../../img/iteratie-3-2.png";
import Iteratie33 from "../../img/iteratie-3-3.png";
import Iteratie34 from "../../img/iteratie-3-4.png";

const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Reason = useRef(null);
  const Method = useRef(null);
  const Accountability = useRef(null);
  const Iteration1 = useRef(null);
  const Iteration2 = useRef(null);
  const Iteration3 = useRef(null);

  const executeScroll = (reference: any, offset?: number) => {
    if (typeof offset === "undefined") {
      offset = 0;
    }
    scrollToRef(reference, offset);
  };

  return (
    <>
      <div className="o-pagenav">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} /> <i>Ga terug</i>
        </Link>
        <div>
          <button onClick={() => executeScroll(Reason, 0)}>Aanleiding</button>
          <button onClick={() => executeScroll(Method, 250)}>Methode</button>
          <button onClick={() => executeScroll(Accountability, 400)}>
            Verantwoording
          </button>
          <button onClick={() => executeScroll(Iteration1, 400)}>
            Eerste iteratie
          </button>
          <button onClick={() => executeScroll(Iteration2, 400)}>
            Tweede iteratie
          </button>
          <button onClick={() => executeScroll(Iteration3, 400)}>
            Derde iteratie
          </button>
        </div>
        <div></div>
      </div>
      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <BackButton />
            <h1>Ontwerpdocument</h1>
            <div ref={Reason}>
              <h2>Aanleiding</h2>
              <p>
                Dit product is gemaakt om meer duideiljkheid te geven hoe het
                deelproduct gevisualiseerd moest gaan worden.
              </p>
            </div>
            <div>
              <h2 ref={Method}>Methode</h2>
              <h3>Ontwerp</h3>
              <p>Er is een ontwerp gemaakt met Adobe xD. </p>
            </div>
            <div ref={Accountability}>
              <h2>Verantwoording</h2>
              <p>
                Dit is een vroeg ontwerp. Omdat mijn duo ziek was, is er door
                mij een ontwerp gemaakt. Mijn Duo, Bart van de Klundert had ook
                een ontwerp gemaakt. Er is voor zijn ontwerp gekozen om verder
                mee te gaan in de toekomst.
              </p>
              <p>
                Van het gemaakte ontwerp is een quick-prototype gemaakt in
                React. Dit vind je{" "}
                <Link to="/page/PrototypeDevelopen">
                  <i>hier</i>
                </Link>
              </p>
              <h3>Versies</h3>
              <p>
                Het eindresultaat is te vinden in dit{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1ydqD_-yUI7flEWrBkTxC1goga2r4CTLf/view?usp=sharing"
                >
                  <i>adobe xd bestand (download)</i>
                </a>{" "}
                of{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://xd.adobe.com/view/fffbb7b8-8854-4892-592f-a1ff31ffae68-89ca/"
                >
                  <i>adobe xd klikbaar</i>
                </a>
              </p>
              <p>
                Om tot een mooi eindresultaat te komen zijn er verschillende
                versies gemaakt.
              </p>
              <div ref={Iteration1}>
                <h4>Eerste iteratie</h4>
                <p>
                  Voor de eerste iteratie was voornamelijk gekeken wat er in
                  moest, en er waren niet echt stijl elementen toegevoegd.
                </p>
                <div className="o-img-box">
                  <p>
                    <i>Resultaat</i>
                  </p>

                  <img
                    alt="1st itartion"
                    className="s-page__content__img__full"
                    src={Iteratie11}
                  ></img>
                  <p>
                    <i>Toevoegen</i>
                  </p>
                  <img
                    alt="1st itartion"
                    className="s-page__content__img__full"
                    src={Iteratie12}
                  ></img>
                </div>
              </div>
              <div ref={Iteration2}>
                <h4> Tweede iteratie</h4>
                <p>
                  Voor de tweede iteratie is er stijl toegevoegd. Er is
                  geprobeerd in de kleuren van Stichting ik wil te blijven. Het
                  toevoegen van een bedrijf is in stappen opgedeeld.
                </p>
                <div className="o-img-box">
                  <p>
                    <i>Toevoegen scherm bedrijfsgegevens (1/3)</i>
                  </p>
                  <img
                    alt="2nd itartion"
                    className="s-page__content__img__full"
                    src={Iteratie21}
                  ></img>
                  <p>
                    <i>Toevoegen scherm openingstijden (2/3)</i>
                  </p>
                  <img
                    alt="2nd itartion"
                    className="s-page__content__img__full"
                    src={Iteratie22}
                  ></img>
                  <p>
                    <i>Toevoegen scherm confirmatie (3/3)</i>
                  </p>
                  <img
                    alt="2nd itartion"
                    className="s-page__content__img__full"
                    src={Iteratie23}
                  ></img>
                  <p>
                    <i>Landing pagina bedrijf na invullen gegevens</i>
                  </p>
                  <img
                    alt="2nd itartion"
                    className="s-page__content__img__full"
                    src={Iteratie24}
                  ></img>
                </div>
              </div>
              <div ref={Iteration3}>
                <h4>Derde iteratie</h4>
                <p>
                  Als groep is besloten dat dit product van de huisstijl van
                  stichting ik wil mag afwijken. Vanuit dat besluit is ervoor
                  gekozen om de kleuren blauw te maken. Tevens is er ook
                  besloten de derde iteratie uit te bouwen tot een web-prototype
                  zodat er beter getest kan worden met de gebruikers.
                </p>
                <div className="o-img-box">
                  <p>
                    <i>Toevoegen scherm bedrijfsgegevens (1/3)</i>
                  </p>
                  <img
                    alt="1st itartion"
                    className="s-page__content__img__full"
                    src={Iteratie31}
                  ></img>
                  <p>
                    <i>Toevoegen scherm openingstijden (2/3)</i>
                  </p>
                  <img
                    alt="1st itartion"
                    className="s-page__content__img__full"
                    src={Iteratie32}
                  ></img>
                  <p>
                    <i>Toevoegen scherm confirmatie (3/3)</i>
                  </p>
                  <img
                    alt="1st itartion"
                    className="s-page__content__img__full"
                    src={Iteratie33}
                  ></img>
                  <p>
                    <i>Landing pagina bedrijf na invullen gegevens</i>
                  </p>
                  <img
                    alt="1st itartion"
                    className="s-page__content__img__full"
                    src={Iteratie34}
                  ></img>
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
