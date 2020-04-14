import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import BackButton from "../common/BackButton";
import { Link } from "react-router-dom";
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

  const Opdrachtgever = useRef(null);
  const Opdracht = useRef(null);
  const Probleemstelling = useRef(null);
  const Aanpak = useRef(null);
  const Resultaat = useRef(null);
  const Reflectie = useRef(null);
  const Bewijs = useRef(null);
  return (
    <>
      <div className="o-pagenav">
        <div className="o-pagenav__fill">
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} /> <i>Ga terug</i>
          </Link>
        </div>
        <div>
          <button onClick={() => executeScroll(Opdrachtgever, 120)}>
            De Opdrachtgever
          </button>
          <button onClick={() => executeScroll(Opdracht, 120)}>
            De opdracht
          </button>
          <button onClick={() => executeScroll(Probleemstelling, 120)}>
            Probleemstelling
          </button>
          <button onClick={() => executeScroll(Aanpak, 120)}>Aanpak</button>
          <button onClick={() => executeScroll(Resultaat, 120)}>
            Resultaat
          </button>
          <button onClick={() => executeScroll(Reflectie, 120)}>
            Reflectie
          </button>
          <button onClick={() => executeScroll(Bewijs, 400)}>Bewijs</button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>

      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <BackButton />
            <h1>Leeswijzer</h1>
            <div>
              <div ref={Opdrachtgever}>
                <h2>De Opdrachtgever</h2>
                <p>
                  Stichting ik wil (
                  <a
                    href="http://www.stichtingikwil.nl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://www.stichtingikwil.nl/
                  </a>
                  ) is een plek waar mensen samenkomen voor het zoeken van
                  verbinding en het delen van talenten, voor iedereen. De
                  stichting bouwt aan een samenleving waar iedereen bij hoort.
                  Bezoekers komen naar de stichting om verschillende redenen. Je
                  kan er heen om dingen te leren, te ontspannen, vrienden te
                  maken en elkaar te helpen. Er zijn activiteiten als
                  schilderen, papierwerk, naaien of het leren van een taal. De
                  laatste tijd houdt de stichting zich ook bezig met beginnende
                  bedrijven die binnen de stichting zijn ontstaan door de
                  gevonden talenten bij de deelnemers.
                </p>
              </div>
              <div ref={Opdracht}>
                <h2>De opdracht</h2>
                <p>
                  Stichting ik wil heeft een achterstand wat betreft
                  technologie. Daar willen ze in samenwerking met Fontys
                  Hogescholen kijken naar waar verbetering mogelijk is. De
                  opdracht was erg vrij, er was geen vastgezet probleem dat een
                  oplossing nodig had, in plaats daarvan moesten wij studenten
                  op zoek gaan naar waar mogelijk verbetering nodig was.
                </p>
              </div>
              <div ref={Probleemstelling}>
                <h2>Probleemstelling</h2>
                <p>
                  In de eerste fase zijn er direct meerdere problemen
                  geanalyseerd. De organisatie was non-technisch, er was geen
                  overzicht welke activiteiten er waren en hoe je je voor
                  activiteiten kon aanmelden en het pand had geen serieuze
                  uitstraling.
                </p>
                <p>
                  Met de groep is besproken de volgende hoofdvraag te
                  beantwoorden
                </p>
                <p>
                  “Hoe kunnen we een middel maken dat Stichting Ik Wil en/of hun
                  bezoekers helpt om duidelijkheid te creëren in termen van:
                  activiteiten, aanwezigheid van het bestuur en andere zaken
                  binnen de stichting”.
                </p>
              </div>
              <div ref={Aanpak}>
                <h2>Aanpak</h2>
                <p>
                  In de eerste week is er onderzoek gedaan naar allerlei
                  hypotheses die we als groep hadden over wat mogelijk verbeterd
                  kon worden. Zo hebben we als groep een projectplan gemaakt en
                  kritische vragen opgesteld. Terwijl de groep het projectplan
                  afgemaakt, hebben Timo van de Laar en ik de kritische vragen
                  gesteld in vorm van interviews (
                  <Link to="page/KritischeVragen">
                    Link naar kritische vragen
                  </Link>
                  ).
                </p>
                <p>
                  Als groep is deze onderzoeksvraag opgesteld “Hoe kunnen we een
                  middel maken dat Stichting Ik Wil en/of hun bezoekers helpt om
                  duidelijkheid te creëren in termen van: activiteiten,
                  aanwezigheid van het bestuur en andere zaken binnen de
                  stichting”. Om deze vraag te beantwoorden zijn 4 deelvragen
                  opgesteld die in duo’s beantwoord zijn. De deelvraag die ik
                  beantwoord heb is: Hoe zien de processen binnen de stichting
                  er uit? (
                  <Link to="page/OnderzoeksDocument/">Link naar onderzoek</Link>
                  ). Nadat alle duo’s conclusies hebben getrokken uit de
                  onderzoeken is er een brainstormsessie geweest (
                  <Link to="page/Brainstorm">Link naar brainstormsessie</Link>).
                  Hieruit zijn 4 mogelijke oplossingen gekomen. Dit waren:
                </p>
                <ul className="c-double-ul">
                  <li>
                    <b>Een zonnestelsel.</b>
                    <br />
                    Dit idee zal de structuur van de stichting weergeven. Alles
                    in de stichting is opgedeeld in categorieën met elk hun
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
                    Dit idee is opgepakt door <i>Mij en Bart van de Klundert</i>
                    <br />
                  </li>
                  <li>
                    <b>Een inschrijf-app.</b>
                    <br />
                    Dit idee helpt de leden van de stichting overzicht te
                    krijgen over welke activiteiten er bij de stichting zijn, en
                    ze kunnen zich hiervoor inschrijven{" "}
                    <i>Noël Herwig en Dylano Hartman</i>
                    <br />
                  </li>
                </ul>
                <p>
                  Deze oplossingen zijn in duo’s uitgewerkt door middel van
                  design thinking. De page builder is eerst ontworpen (
                  <Link to="page/OntwerpDocument">Link naar ontwerp</Link>
                  ), daarna gebouwd (
                  <Link to="page/PrototypeDevelopen">
                    Link naar prototype ontwikkelen
                  </Link>
                  ) om beter te kunnen usability testen, en getest (
                  <Link to="page/UsabilityTest">Link naar usability test</Link>
                  ).
                </p>
                <p>
                  Nadat elk duo een prototype had gemaakt en daarop had
                  geëtaleerd is er een presentatie gegeven aan de opdrachtgever
                  (
                  <Link to="page/VoortgangsPresentatie">
                    Link naar voortgangspresentatie
                  </Link>
                  ). De opdrachtgever heeft 2 voorkeuren gegeven, de app en het
                  dashboard. Na overleg met de groep is besloten deze producten
                  uit te werken in de implementatiefase.
                </p>
                <p>
                  Dylano Hartman, Max Altena en Noël Herwig zijn hebben de app
                  gebouwd. Bart van de Klundert, Mike Hendriks en ik hebben het
                  dashboard gebouwd (
                  <Link to="page/Developen">Link naar developen</Link>).
                </p>
              </div>
              <div ref={Resultaat}>
                <h2>Resultaat</h2>
                <p>
                  Er is een geheel uitgewerkte app en dashboard. Deze zijn{" "}
                  <a
                    href="http://Stichting-ik-wil.web.app"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    hier
                  </a>{" "}
                  te bekijken.
                </p>

                <b>Dashboard</b>

                <p>
                  Het dashboard geeft de stichting duidelijk overzicht over de
                  volgende dingen bij de stichting:
                </p>
                <ul className="c-double-ul">
                  <li>Wat er vandaag voor eten is</li>
                  <li>Wat het laatste nieuws van de stichting is</li>
                  <li>
                    Welke activiteiten er zijn, op welke dag deze zijn en wie de
                    kartrekkers zijn van de activiteit.
                  </li>
                  <li>Het aanwezig bestuur.</li>
                  <li>De huisregelementen.</li>
                </ul>
                <p>
                  Het dashboard heeft een volledig werkende CMS, waar alle
                  benoemde informatie aangepast kan worden.{" "}
                </p>
                <b>App</b>
                <p>
                  De app gebruikt de activiteiten die op het dashboard zijn
                  toegevoegd, en geeft de leden van de stichting de mogelijkheid
                  zich aan te melden voor deze activiteiten. Op deze manier
                  hebben zij persoonlijk overzicht.
                </p>
              </div>
              <div ref={Reflectie}>
                <h2>Reflectie</h2>
                <p>
                  Tijdens dit semester heb ik vaak het initiatief genomen om de
                  dag te beginnen en rollen te verdelen. Leiderschap deed ik
                  vaker, maar ik heb er tijdens dit project extra op gelet dat
                  iedereen er achter stond wat hun taken waren en dat iedereen
                  duidelijk wist wie welke taak op zich had genomen. Dat deed ik
                  door vaak de stand-up te leiden, en te vragen of iedereen wist
                  wat zijn taak was voor de dag. Als ik er over twijfelde of ze
                  het echt wisten vroeg ik soms iets in de richting van:
                  "Persoon A, wat gaat Persoon B vandaag doen?". Dit ging beter
                  dan het vorige semester waar ik met een groep moest werken,
                  aangezien daar veel onduidelijkheid was over wie wat aan het
                  doen was.
                </p>
                <p>
                  Daarnaast heb ik het dit semester op me genomen de backend te
                  maken van de applicatie. Dit was voor mij de eerste keer, het
                  was niet geheel nieuw, ik heb wel eens wat getweaked met een
                  backend, maar er nooit zelf een geschreven. Dit was een
                  spannende eerste stap omdat alles wat fout ging met data lezen
                  en schrijven op mij geschoven kon worden. Hier liepen we de
                  laatste aantal weken tegen aan. De structuur waarop ik de
                  database heb opgezet was niet ideaal. De structuur was
                  overigens wel besproken met de andere groepsgenoten die ermee
                  te maken zouden hebben, en door hen goedgekeurd. Aan het einde
                  liep de app-groep tegen allerlei complicaties aan, terwijl het
                  dashboard al af was. Er is besproken wat de beste oplossing
                  was, en om alles om te bouwen was niet mogelijk binnen de
                  tijd. De volgende keer is het noodzakelijk dat er een database
                  ontwerp gemaakt wordt voor we aan de applicatie beginnen. Er
                  waren verder nauwelijks onduidelijkheden over de geschreven
                  code.
                </p>
                <p>
                  Ook was dit het eerste project dat ik met typescript heb
                  gewerkt. Er was niet heel veel verschil, maar toch was dit erg
                  leerzaam voor me. Er zijn veel applicaties waar typescript de
                  standaard is, en nu ik het begrijp ga ik er in mijn toekomst
                  nog veel gebruik van kunnen maken.
                </p>
                <p>
                  Het business model canvas maken had ik ontzettend veel moeite
                  mee. Ik heb aan verschillende mensen om hulp gevraagd (docent,
                  schoonvader, workshop en klasgenoten), en heb uiteindelijk hem
                  toch in kunnen vullen. Het lastige eraan voor mij was dat het
                  een non-profit organisatie is. Ik wist niet hoe ze aan geld
                  komen, en wat ze bijvoorbeeld te besteden hadden. Na gebeld te
                  hebben met Ihsan is dit duidelijk geworden en heb ik het
                  document ingevuld.
                </p>
              </div>

              <div ref={Bewijs}></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};
export default Page;
