import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Persona from "../../img/Persona.png";
import CommunicatieStrategieMondTotMond from "../../img/CommunicatieStrategieMondTotMond.png";
import DigitalTouchpoints from "../../img/DigitalTouchpoints.png";
import BusinessModel from "../../img/pidzbusinessmodel2.png";
import Gebruikersprofiel from "../../img/gebruikersprofiel.png";
import Zoom from "react-medium-image-zoom";
import { Link } from "react-router-dom";

const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Aanleiding = useRef(null);
  const Doelgroep = useRef(null);
  const Doelstellingen = useRef(null);
  const Media = useRef(null);
  const Boodschap = useRef(null);
  const Verantwoording = useRef(null);

  const Propositie = useRef(null);
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
          <button onClick={() => executeScroll(Doelgroep, 20)}>
            Doelgroep
          </button>
          <button onClick={() => executeScroll(Doelstellingen, 20)}>
            Doelstellingen
          </button>
          <button onClick={() => executeScroll(Media, 20)}>Media</button>
          <button onClick={() => executeScroll(Boodschap, 20)}>
            Boodschap
          </button>
          <button onClick={() => executeScroll(Propositie, 20)}>
            Propositie
          </button>
          <button onClick={() => executeScroll(Verantwoording, 20)}>
            Verantwoording
          </button>

          <button onClick={() => executeScroll(Bronnen, 20)}>Bronnen</button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>
      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <div>
              <h1>Communicatie Strategie</h1>
              <div ref={Aanleiding}>
                <h2>Aanleiding</h2>
                <p>
                  Om het onderdeel Delen van Kennis van WijPIDZ bij de doelgroep
                  bekend te maken, is er een communicatiestrategie opgesteld. De
                  eerste gebruikers zullen ZZP’ers zijn die nu al op het
                  MijnPIDZ systeem zitten. Deze zullen geïnformeerd worden over
                  het WijPIDZ systeem, en hier zullen hopelijk actieve leden uit
                  volgen.
                </p>
                <div className="s-page__content__img__container__img">
                  <Zoom>
                    <img
                      className="s-page__content__img__full"
                      alt="Gebruikersprofiel"
                      src={Gebruikersprofiel}
                    />
                  </Zoom>
                </div>
              </div>

              <div ref={Doelgroep}>
                <h2>Doelgroep</h2>
                <h3>Gebruikersprofiel</h3>
                <p>
                  Vanuit PIDZ is een gebruikersprofiel meegeleverd bij hun
                  vooronderzoek. Dit profiel is opgesteld vanuit 5 interviews en
                  3 gesprekken. Er is in te zien waar de ZZP’ers vrolijk van
                  worden, frustrerend vinden en wat hun taken zijn.
                </p>
                <h3>Persona</h3>
                <p>
                  Om in een oogopslag te zien wie de gebruiker is, is er een
                  persona gemaakt. De persona is gebaseerd op twee delen. Als
                  eerst op de gebruikersprofiel die is aangeleverd door PIDZ.
                  Hier is gekeken naar de grootste frustraties, waar de ZZP’ers
                  vrolijk van worden en de taken die ze verrichten. Daarnaast
                  zijn er op Facebook profielen van gebruikers die of vragen
                  stelden, of op antwoord gaven op vragen in de Facebook groep:
                  “ZZP’ers in de zorg”. Er is uitbundig gezocht naar wat voor
                  een mensen het zijn, wat hun leeftijd is, wat voor berichten
                  ze op facebook plaatste. Er zijn verder geen interviews of
                  dergelijke geweest, omdat we hier geen toestemming voor hadden
                  gekregen van PIDZ.
                </p>
                <div className="s-page__content__img__container__img">
                  <Zoom>
                    <img
                      className="s-page__content__img__full"
                      alt="Persona"
                      src={Persona}
                    />
                  </Zoom>
                </div>
              </div>
              <div ref={Doelstellingen}>
                <h2>Doelstellingen</h2>
                <h3>Doel 1</h3>
                <p>
                  Het eerste doel is ervoor zorgen dat de ZZP’ers elkaar op het
                  platform krijgen. Hiervoor moeten er enkele gebruikers op het
                  platform komen die het product zo goed vinden dat ze het gaan
                  aanraden aan hun collega’s.
                </p>
                <div className="s-page__content__img__container__img">
                  <Zoom>
                    <img
                      className="s-page__content__img__full"
                      alt="CommunicatieStrategie MondTotMond"
                      src={CommunicatieStrategieMondTotMond}
                    />
                  </Zoom>
                </div>
                <h3>Doel 2</h3>
                <p>
                  Het tweede doel is meer gebruikers op het platform krijgen. Om
                  in te zien waar de gebruikers kunnen aanhaken is een customer
                  journey opgezet. Hier zijn verschillende punten op te vinden
                  waar de gebruikers aan kunnen haken.
                </p>
                <div className="s-page__content__img__container__img">
                  <Zoom>
                    <img
                      className="s-page__content__img__full"
                      alt="CommunicatieStrategie MondTotMond"
                      src={DigitalTouchpoints}
                    />
                  </Zoom>
                </div>
              </div>
              <div ref={Media}>
                <h2>Media</h2>
                <p>
                  Pidz kan verschillende dingen doen om ervoor te zorgen dat de
                  doelen behaald worden.
                </p>
                <h3>Adds</h3>
                <p>
                  Pidz kan reclames uitzetten over hun nieuwe product. Als dit
                  specifieke adds zijn voor ZZP’ers in de zorg (bijvoorbeeld
                  door te targetten voor mensen die in dergelijke groepen
                  zitten), zullen er zeker meer views komen op het product, en
                  daardoor hopelijk leden.
                </p>
                <h3>Posts op social media</h3>
                <p>
                  Pidz[1] heeft al veel volgers, zo hebben ze er op facebook al
                  3100. Als ze hier posts op zouden plaatsen van het nieuwe
                  product, zullen er gegarandeerd er mensen op de landingspagina
                  komen.
                </p>
                <p>
                  Daarnaast kunnen ze zelf posten over het nieuwe product in
                  groepen waar al vragen gesteld worden, zoals de groep "ZZP’ers
                  in de zorg" [2]. Als ze hier een platform promoten waar al
                  deze ZZP’ers op een juiste manier hun vragen kunnen stellen
                  zullen ze ook bij ‘awareness’ uitkomen op de customer journey.
                </p>
                <h3>Nieuwsbrief/mail</h3>
                <p>
                  Pidz heeft aangegeven dat ze 9000 ZZP’ers hebben die MijnPIDZ
                  gebruiken. Hiervan zijn er 3000 dagelijks actief. Deze
                  gebruikers zouden geïnformeerd kunnen worden over WijPIDZ via
                  de mail of een nieuwsbrief waarin alles over het nieuwe
                  product te vinden is. Op deze manier komen er leden die al bij
                  Pidz aangesloten zijn naar hun nieuwe product.
                </p>
              </div>
              <div ref={Media}>
                <h2>Metrics</h2>
                <p>
                  Om te meten of de doelen behaald worden, kunnen er
                  verschillende dingen gemeten worden. Zo kan er bijgehouden
                  worden wat de CPC (cost per click) zou zijn bij facebook ads.
                  Daarnaast kunnen ze kijken hoeveel procent van de kanalen waar
                  ze mensen werven actief lid wordt. Simpelweg lid worden is al
                  een win, maar als de persoon ook actief is met het
                  beantwoorden en stellen van vragen is de kans groter dat de
                  persoon in de loyalty fase komt van de customer journey.
                </p>
                <p>
                  Daarnaast kunnen ze kijken naar het aantal shares dat op de
                  vragen zit. Als dit aanzienlijk toeneemt kunnen ze hier
                  conclusies uit trekken dat het product actiever gebruikt
                  wordt.
                </p>
              </div>
              <div ref={Boodschap}>
                <h2>Boodschap</h2>
                <p>De USP, en de boodschap, is de volgende zin:</p>
                <p className="quote">ZZP’ers in de zorg, zorgen voor elkaar</p>
                <p>
                  Dit product is gemaakt voor zzp’ers die elkaar kunnen helpen
                  door vragen van elkaar te beantwoorden, en zelf de
                  mogelijkheid hebben vragen te kunnen stellen. Met deze USP is
                  het direct duidelijk voor de <b>ZZP’ers</b> dat het gaat om
                  een <b>product voor hen</b>, waar ze zelf <b>elkaar</b>{" "}
                  helpen.
                </p>
              </div>
              <div ref={Propositie}>
                <h2>Propositie</h2>
                <p>
                  Om de propositie van het product te bekijken worden twee
                  middelen gebruikt. De eerste is de user profile die ook bij de
                  doelgroep te vinden is. Hierin staan de dingen waar de ZZP er
                  vrolijk van wordt, wat zijn/haar taken zijn en wat ze minder
                  leuk vinden om te doen.
                </p>
                <p>
                  Daarnaast is de value proposition van het business model (
                  <Link to="/page/PidzBusinessModel">
                    Link naar Business Model
                  </Link>
                  ) geleend. Hierin staat wat het product te bieden heeft voor
                  de ZZP’ers, maar ook voor de bemiddelaars.
                </p>
                <div className="s-page__content__img__container">
                  <div className="s-page__content__img__container__img">
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="BusinessModel"
                        src={BusinessModel}
                      />
                    </Zoom>
                  </div>
                  <div className="s-page__content__img__container__img">
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Gebruikersprofiel"
                        src={Gebruikersprofiel}
                      />
                    </Zoom>
                  </div>
                </div>
              </div>
              <div ref={Verantwoording}>
                <h2>Verantwoording</h2>
                <p>Dit gehele document is door mij gemaakt.</p>
              </div>

              <div ref={Bronnen}>
                <h2>Bronnen</h2>
                <p>
                  [1] Pidz Facebook. (z.d.). Facebook. Geraadpleegd 22 juni
                  2020, van{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/PIDZZorg"
                  >
                    https://www.facebook.com/PIDZZorg
                  </a>
                </p>
                <p>
                  [2] ZZP'ers in de Zorg Facebook. (z.d.). Facebook.
                  Geraadpleegd 22 juni 2020, van{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/groups/593072244147952"
                  >
                    https://www.facebook.com/groups/593072244147952
                  </a>
                </p>
                <p>
                  Dit is een andere groep dan de hierboven benoemde groep met
                  hetzelfde doel <br />
                  [3] ZZP'ers in de Zorg Facebook (z.d.). Facebook. Geraadpleegd
                  22 juni 2020, van{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/zzpersindezorg2016"
                  >
                    https://www.facebook.com/zzpersindezorg2016
                  </a>
                </p>
                <p>
                  [4] Microsoft Stream. (2020, 24 april). Geraadpleegd op 22
                  juni 2020, van{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://web.microsoftstream.com/video/f5aa5c46-6909-448d-87a1-98a54d076797"
                  >
                    https://web.microsoftstream.com/video/f5aa5c46-6909-448d-87a1-98a54d076797
                  </a>
                </p>
                <p>
                  [5] OnderzoeksrapportPIDZ.pdf. (z.d.). Geraadpleegd op 22 juni
                  2020, van{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://drive.google.com/file/d/1fX9tW7vh72wxoXwMQbxrT2Ky_XDeuLk6/view?usp=sharing"
                  >
                    https://drive.google.com/file/d/1fX9tW7vh72wxoXwMQbxrT2Ky_XDeuLk6/view?usp=sharing
                  </a>
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
