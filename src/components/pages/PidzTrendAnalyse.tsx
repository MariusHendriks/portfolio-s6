import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ConsumerCanvasImg from "../../img/ConsumerCanvas.png";
import Zoom from "react-medium-image-zoom";

const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Aanleiding = useRef(null);
  const Trends = useRef(null);
  const Verantwoording = useRef(null);
  const ConsumerCanvas = useRef(null);
  const Conclusie = useRef(null);
  const Bronnen = useRef(null);

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
          <button onClick={() => executeScroll(Aanleiding, 20)}>
            Aanleiding
          </button>
          <button onClick={() => executeScroll(Trends, 20)}>Trends</button>

          <button onClick={() => executeScroll(ConsumerCanvas, 20)}>
            ConsumerCanvas
          </button>
          <button onClick={() => executeScroll(Verantwoording, 20)}>
            Verantwoording
          </button>
          <button onClick={() => executeScroll(Conclusie, 20)}>
            Conclusie
          </button>
          <button onClick={() => executeScroll(Bronnen, 20)}>Bronnen</button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>
      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <div>
              <h1>Trend analyse</h1>
              <div ref={Aanleiding}>
                <h2>Aanleiding</h2>
                <p>
                  Dit document is gemaakt om erachter te komen wat de laatste
                  trends zijn voor ZZP’ers. Er is eerst gekeken naar wat een
                  trend eigenlijk is. Toen dit duidelijk was is er besloten in
                  welk gebied er onderzocht gaat worden waarvan de trends
                  relevant zullen zijn. Na veel discussie en speculatie is er
                  besloten om te bekijken wat de trends zijn voor ZZP’ers (dus
                  niet alleen voor ZZP'ers in de zorg). De resultaten kunnen
                  gebruikt worden bij het concept bouwen. De kans is zeer groot
                  dat er iets gevonden zal worden wat het concept zal
                  veranderen. De gevonden trends zijn hierna geanalyseerd met
                  een consumer trend canvas. Hiermee kan de trend overzichtelijk
                  gemaakt worden en beter gebruikt worden.
                </p>
              </div>
              <div>
                <h2 ref={Trends}>Gevonden trends</h2>

                <h3>
                  Meer nadruk op freelance service en community-ondersteuning
                </h3>
                <p>
                  Volgens Younger, 2018 (bron [2], trend 3) moeten de platformen
                  die ZZP’ers ondersteunen meer ondersteunen met de vragen die
                  ze hebben. De ZZP’ers willen hulp met hun zwakke en sterke
                  punten vinden, curriculum vitae (CV), advies over hun bedrijf,
                  educatieve ondersteuning en teamwork. De platformen die niet
                  aan een aantal of geen van deze eisen voldoen zullen het niet
                  ver schoppen op de markt.
                </p>
                <p>
                  De ZZP’ers in de zorg hebben de behoefte om vragen te kunnen
                  stellen en contact te leggen met andere ZZP’ers. Doordat ze op
                  het platform vragen kunnen stellen, kunnen ze elkaar helpen om
                  de benoemde punten te behandelen.
                </p>
                <p>
                  Momenteel is dit vermoedelijk microtrend. Younger heeft het
                  artikel in 2018 gepubliceerd, er staat verder geen informatie
                  of dit al lang een trend was hiervoor.
                </p>

                <h3>Zorgprofessional verandert</h3>
                <p>
                  Uit onderzoek van Vilans (bron [3]) is gebleken dat
                  zorgprogressionals steeds vaker werken als ZZP’er, in plaats
                  van wijkteams en zorgorganisaties. Hierdoor wordt hun werkvlak
                  breder.
                </p>
                <p>
                  Dit betekend ook dat er elke dag meer ZZP’ers zijn die de
                  vragen van de vorige trend kunnen hebben, en hier kan het
                  platform ook op in spelen.
                </p>
                <p>
                  Dit is vermoedelijk een macrotrend. Het artikel komt uit 2017,
                  wat aangeeft dat het al minimaal 3 jaar een trend is, en
                  eigenlijk een microtrend zou zijn. Toch verwacht ik dat dit al
                  langer aan het opbouwen is, en dat ZZP’ers al meer dan 5 jaar
                  een groeiende groep zijn.
                </p>
              </div>
              <div ref={ConsumerCanvas}>
                <h2>Consumer Canvas</h2>
                <p>
                  Er is gekozen om een consumer canvas te maken van de trend
                  ‘Meer nadruk op freelance service en community-ondersteuning’
                  omdat het erg belangrijk is dat deze trend goed begrepen wordt
                  en hoe deze kan worden toegepast.
                </p>
                <div className="s-page__content__img__container">
                  <div className="s-page__content__img__container__img">
                    <h3>Consumer canvas</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Consumer Canvas"
                        src={ConsumerCanvasImg}
                      />
                    </Zoom>
                  </div>
                </div>
              </div>
              <div ref={Verantwoording}>
                <h2>Verantwoording</h2>
                <p>Dit hele document is door mij gemaakt.</p>
              </div>
              <div ref={Conclusie}>
                <h2>Conclusie</h2>
                <p>
                  Na deze trendanalyse is het concept aangepast naar de
                  onderzochte trends. Het is nu duidelijk wat ZZP’ers verwachten
                  van dergelijke platforms. Er zijn enkele punten opgesteld wat
                  het platform kan helpen verbeteren. Deze punten zijn:
                </p>
                <ul className="c-double-ul">
                  <li>Generieke vragen al beantwoord hebben.</li>
                  <li>
                    Tips geven over hoe ze bijvoorbeeld een goede cv maken (een
                    van de benoemde punten).
                  </li>
                  <li>
                    De ZZP’ers de mogelijkheid geven vragen kunnen laten stellen
                    aan elkaar.
                  </li>
                  <li>
                    Karma/punten/leaderboard systeem creëren wat ervoor kan
                    zorgen dat mensen actief reageren.
                  </li>
                </ul>
              </div>
              <div ref={Bronnen}>
                <h2>Bronnen</h2>
                <ul className="c-double-ul">
                  <li>
                    [1] I. (2017, 6 april). Wat zijn trends nou eigenlijk?
                    Geraadpleegd op 18 mei 2020, van
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://inspiratiebrigade.nl/wat-zijn-trends/"
                    >
                      http://inspiratiebrigade.nl/wat-zijn-trends/
                    </a>
                  </li>
                  <li>
                    [2] Younger, J. (2018, 11 oktober). 15 Important Trends In
                    Freelancing: Why This Matters Now. Geraadpleegd op 19 mei
                    2020, van
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.forbes.com/sites/jonyounger/2018/10/11/fifteen-important-trends-in-freelancing-why-this-matters-now/#4f13a49a3c10"
                    >
                      https://www.forbes.com/sites/jonyounger/2018/10/11/fifteen-important-trends-in-freelancing-why-this-matters-now/#4f13a49a3c10
                    </a>
                  </li>
                  <li>
                    [3] 9 trends in de ouderenzorg. (2017, 31 augustus).
                    Geraadpleegd op 19 mei 2020, van
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.vilans.nl/artikelen/trends-ouderenzorg"
                    >
                      https://www.vilans.nl/artikelen/trends-ouderenzorg
                    </a>
                  </li>
                  <li>
                    [4] Wortell. (2020). 7 trends die de zorg in 2020 ingrijpend
                    veranderen. Geraadpleegd op 19 mei 2020, van
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.wortell.nl/assets/uploads/2018/08/Trendrapport-7-trends-in-de-zorg.pdf"
                    >
                      https://www.wortell.nl/assets/uploads/2018/08/Trendrapport-7-trends-in-de-zorg.pdf
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};
export default Page;
