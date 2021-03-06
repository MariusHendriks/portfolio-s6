import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Vraag from "../../img/facebookvraag.png";
import Comment from "../../img/facebookcomments.png";
import Zoom from "react-medium-image-zoom";
const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Aanleiding = useRef(null);
  const Analyse = useRef(null);
  const Verantwoording = useRef(null);
  const Conclusie = useRef(null);
  const Uitvoering = useRef(null);
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
          <button onClick={() => executeScroll(Aanleiding, 120)}>
            Aanleiding
          </button>
          <button onClick={() => executeScroll(Analyse, 120)}>Aanpak</button>
          <button onClick={() => executeScroll(Uitvoering, 120)}>
            Uitvoering
          </button>
          <button onClick={() => executeScroll(Verantwoording, 120)}>
            Verantwoording
          </button>
          <button onClick={() => executeScroll(Conclusie, 120)}>
            Conclusie
          </button>
          <button onClick={() => executeScroll(Bronnen, 120)}>Bronnen</button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>
      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <h1>Concurrentieanalyse</h1>
            <div>
              <div ref={Aanleiding}>
                <h2>Aanleiding</h2>
                <p>
                  Om tot een goed product te komen, is het relevant om te weten
                  waar de concurrenten fouten en imperfecties hebben. Als deze
                  en alle goede punten van de concurrenten opgepakt worden zal
                  het product in theorie beter zijn dan die van de concurrent.
                  Daarnaast kan het ook relevant zijn als er geen concurrenten
                  gevonden worden, en kan er gekeken worden naar hoe andere
                  groepen ZZP’ers en beroepen waar weinig collegiaal contact is
                  dat oplost.
                </p>
              </div>
              <div ref={Analyse}>
                <h2>Aanpak</h2>
                <p>
                  Er is onderzocht wie de directe en indirecte concurrenten
                  zijn. Daarnaast is er onderzoek gedaan door in verschillende
                  Facebook groepen deel te nemen voor ZZP'ers in de zorg. Ook is
                  er een feature matrix gemaakt om te zien welke concurrenten
                  waar aan voldoen. Als laatst is er een SWOT analyse gemaakt om
                  te bekijken waar de sterke en zwakke punten van het product
                  liggen tegenover die van de concurrenten.
                </p>
              </div>
              <div ref={Uitvoering}>
                <h2>Uitvoering</h2>
                <p>De gevonden directe concurrenten zijn</p>
                <ul className="c-double-ul">
                  <li>
                    Zorgzuster [1]. Een platform waar ZZP'ers in de zorg alleen
                    of in teams in contact worden gebracht met bemiddelaars. Dit
                    is een concurrent omdat zorgzuster kleine teams samenbrengt
                    en daardoor wordt er kennis gedeeld en komen de ZZP'ers in
                    contact met collega's.
                  </li>
                  <li>
                    ZZP-FORUM [2]. Op dit platform kunnen ZZP'ers (niet alleen
                    van de zorg) vragen stellen over daadwerkelijk alles. Dit is
                    een concurrent omdat hier kennis wordt gedeeld.
                  </li>
                  <li>
                    Facebook [3]. Dit is de grootste concurrent. Alle vragen die
                    gesteld worden, antwoorden die gegeven worden en ook
                    zorgbemiddelaars zijn te vinden in Facebook groepen. Op de
                    foto's hieronder is te zien dat er soms 100e reacties komen.
                    Ook is er een foto te zien dat er uitgebreidde antwoorden
                    gegeven worden en de persoon die de vraag stelde niet meer
                    weet wat het beste antwoord is.
                  </li>
                </ul>
                <div className="s-page__content__img__container">
                  <div className="s-page__content__img__container__img">
                    <h3>Lange antwoorden</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="Lange antwoorden"
                        src={Vraag}
                      />
                    </Zoom>
                  </div>
                  <div className="s-page__content__img__container__img">
                    <h3>100 comments</h3>
                    <Zoom>
                      <img
                        className="s-page__content__img__full"
                        alt="hondert comments"
                        src={Comment}
                      />
                    </Zoom>
                  </div>
                </div>
              </div>
              <div>
                <p>De gevonden indirecte concurrenten en inspiratie zijn</p>
                <ul className="c-double-ul">
                  <li>
                    Reddit [4]. Op deze site zijn honderden verschillende
                    pagina's waar elk individu kan antwoorden. Antwoorden worden
                    ge-upvote of ge-downvote om te zien wat het beste antwoord
                    is. Reddit is momenteel nog geen directe concurrent omdat er
                    nog geen vragen over ZZP'ers in de zorg op gesteld zijn. De
                    manier van aangeven wat het beste antwoord is en reacties op
                    elkaar zou gebruikt kunnen worden in het product.
                  </li>
                  <li>
                    Stackoverflow [5]. Stackoverflow is geen directe concurrent
                    omdat Stackoverflow gebruikt wordt om vragen over code te
                    stellen. Toch kan hier erg veel van gebruikt worden ter
                    inspiratie. Het beste antwoord is ontzettend duidelijk en er
                    zijn honderden programmeertalen waarin vragen gesteld
                    worden. Hoe Stackoverflow het categoriseren heeft aangepakt
                    kan ook als inspiratie gebruikt worden.
                  </li>
                </ul>
              </div>
              <div ref={Verantwoording}>
                <h2>Verantwoording</h2>
                <p>
                  Alle informatie op deze pagina is gevonden door mij, of is
                  meegenomen uit de conclusie van Max Altena of Dylano Hartman
                </p>
              </div>
              <div ref={Conclusie}>
                <h2>Conclusie</h2>
                <p>
                  Er is geen concurrent die zich focust op het onderling delen
                  van kennis en zelfstandige zorgprofessionals in contact
                  stellen met elkaar. Echter zijn er wel indirecte concurrenten
                  waar de ZZP’ers nu naartoe gaan om hun vragen te stellen en
                  contact te zoeken. Er zijn verschillende facebook groepen waar
                  nu actief vragen gesteld en beantwoord worden.
                </p>
                <p>
                  Het deelproduct moet ervoor zorgen dat de ZZP’ers vragen
                  kunnen stellen aan elkaar, de persoon die de vraag stelde
                  duidelijk kan aangeven welk antwoord hem of haar geholpen
                  heeft (zoals dat bij Reddit en Stack overflow gebeurd). Als
                  laatst is het uit de conclusie van Max Altena gekomen dat een
                  Chatfunctie ook belangrijk is voor het product.
                </p>
              </div>
              <div ref={Bronnen}>
                <h2>Bronnen</h2>
                <p>
                  <b>bron [1]: </b>
                  Zorgzuster. (2020). Geraadpleegd op 16 mei 2020, van{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.zorgzuster.nl/zzp/meer-over-zorgzuster/werken-in-teams"
                  >
                    https://www.zorgzuster.nl/zzp/meer-over-zorgzuster/werken-in-teams
                  </a>
                </p>
                <p>
                  <b>bron [2]: </b>
                  ZZP-Forum.nl - Home. (z.d.). Geraadpleegd op 16 mei 2020, van{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.zzp-forum.nl"
                  >
                    https://www.zzp-forum.nl/
                  </a>
                </p>
                <p>
                  <b>bron [3]: </b>
                  Facebook. (z.d.). Geraadpleegd op 16 mei 2020, van{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/"
                  >
                    https://www.facebook.com/
                  </a>
                </p>
                <p>
                  <b>bron [4]: </b>
                  reddit: the front page of the internet. (z.d.). Geraadpleegd
                  op 16 mei 2020, van{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.reddit.com/"
                  >
                    https://www.reddit.com/
                  </a>
                </p>
                <p>
                  <b>bron [5]: </b>
                  Stack Overflow - Where Developers Learn, Share, & Build
                  Careers. (z.d.). Stack Overflow. Geraadpleegd 16 mei 2020, van{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.stackoverflow.com/"
                  >
                    https://stackoverflow.com
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
