import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ProtoXD from "../../img/protoXDPidz.png";
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
        <div className="o-pagenav__nav" onClick={() => window.history.back()}>
          <FontAwesomeIcon icon={faArrowLeft} /> <i>Ga terug</i>
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
          <button onClick={() => executeScroll(Bewijs, 130)}>Bewijs</button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>

      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <h1>Leeswijzer</h1>
            <div>
              Deze leeswijzer is ook als PDF versie te bekijken.{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://drive.google.com/file/d/1az6nEACUcqKHzFKcCHttoWt7v62t7-qk/view?usp=sharing"
              >
                Klik daarvoor hier.
              </a>
            </div>
            <div>
              <div ref={Opdrachtgever}>
                <h2>De Opdrachtgever</h2>
                <p>
                  PIDZ (
                  <a
                    href="https://pidz.nl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://pidz.nl/
                  </a>
                  ) is een bedrijf die zich focust op ZZP'ers in de zorg. De
                  ZZP'ers kunnen via PIDZ in contact komen met bemiddelaars. Er
                  zijn drieduizend ZZP'ers op werkdagen actief, en er zijn in
                  totaal negenduizend gebruikers.
                </p>
                <p>
                  De visie van PIDZ is dat de zorg op het moment te veel gaat om
                  getallen en winst. PIDZ wil dat het weer terug gaat naar het
                  zorgen voor elkaar.
                </p>
                <p>
                  De missie van PIDZ is de zorg verbonden te houden met de
                  mensen die er werkzaam in zijn.{" "}
                </p>
              </div>
              <div ref={Opdracht}>
                <h2>De opdracht</h2>
                <p>
                  PIDZ heeft op het moment MijnPIDZ. Dit is een platform waar de
                  ZZP'ers opdrachten kunnen zoeken. Er zijn bemiddelaars in
                  contact die vragen om bepaalde skills waar PIDZ een ZZP'er aan
                  koppelt. Nu wil PIDZ dit gaan verbreden met het onderdeel
                  WijPIDZ. Op WijPIDZ kunnen er verschillende activiteiten
                  uitgevoerd worden. Dat zijn
                </p>
                <ul className="c-double-ul">
                  <li>Het aanbieden van betrouwbare artikelen van experts</li>
                  <li>
                    Het onderling delen van kennis en zelfstandige
                    zorgprofessionals in contact stellen met elkaar
                  </li>
                  <li>Het voordelig inkopen van goederen en diensten</li>
                  <li>
                    Het makkelijker maken voor zelfstandige zorgprofessionals om
                    de juiste opleidingen en cursussen te vinden
                  </li>
                </ul>
                <p>
                  Deze onderdelen zijn verdeelt onder de groep. Timo van de Laar
                  en Noël Herwig hebben het inkopen van goederen en diensten
                  gedeelte opgepakt, Mike Hendriks en Bart van de Klundert het
                  onderdeel om opleidingen en cursussen te volgen. Max Altena,
                  Dylano Hartman en ik hebben het onderling delen van kennis
                  opgepakt.
                </p>
                <p>
                  In dit onderdeel kunnen de ZZP'ers vragen stellen aan elkaar,
                  communities vormen, elkaar toevoegen als connectie en chatten.{" "}
                </p>
              </div>
              <div ref={Probleemstelling}>
                <h2>Probleemstelling</h2>
                <p>
                  De gevonden problemen die opgelost konden worden, zijn
                  gebaseerd in de oriëntatiefase, door kritishce vragen (link
                  naar kritische vragen), een individuele analyse (link naar
                  individuele analyse) en het vooronderzoek dat is geleverd door
                  PIDZ. Dit zijn de problemen die gevonden zijn:
                </p>
                <ul className="c-double-ul">
                  <li>
                    Contact met collega’s. De ZZP’ers missen het verbonden zijn
                    met collega’s. Door het onderling delen van kennis zal er
                    contact gelegd moeten worden tussen de ZZP’ers omdat er
                    vragen gesteld en beantwoord worden door de ZZP’ers zelf.
                  </li>
                  <li>
                    Groepen vormen. De ZZP’ers voelen zich nooit deel van een
                    team. Doordat er vragen gesteld en beantwoord kunnen worden,
                    zullen er wellicht groepen met gedeelde interesses, ervaring
                    en kennis ontstaan.
                  </li>
                  <li>
                    Een compliment ontvangen. Dit is iets wat de ZZP’ers fijn
                    vinden om te horen van andere ZZP’ers, en kan zeker
                    terugkomen in een platform waar kennis gedeelt wordt.
                  </li>
                  <li>
                    PIDZ heeft nog geen unieke punten. Hiermee word bedoeld dat
                    PIDZ geen dingen doet die concurrenten niet doen.
                  </li>
                </ul>
              </div>
              <div ref={Aanpak}>
                <h2>Aanpak</h2>
                <p>
                  Tijdens dit project is er niet met een specifiek framework
                  gewerkt om door het project heen te lopen. Er is tijdens het
                  opzetten van het project plan (
                  <Link to="/page/PidzProjectPlan">Link naar project plan</Link>
                  ) gekeken naar wat er moest gebeuren in welke volgorde, en
                  deze planning is tijdens het gehele project aangehouden.
                </p>
                <p>
                  In de eerste weken is er individueel onderzoek gedaan naar wat
                  het probleem is. Dit is gedaan door kritische vragen (
                  <Link to="/page/PidzKritischeVragen">
                    Link naar kritische vragen
                  </Link>
                  ) op te stellen en door een individuele analyse (
                  <Link to="/page/PidzIndividueleAnalyse">
                    Link naar Individuele analyse
                  </Link>
                  ) te maken.
                </p>
                <p>
                  Toen het probleem duidelijk was is er een project plan
                  opgezet. In dit projectplan (
                  <Link to="/page/PidzProjectPlan">Link naar projectplan</Link>)
                  is het duidelijk geworden wat er zal gaan gebeuren in de
                  komende weken.
                </p>
                <p>
                  Het eerste wat onderzocht is, is wat de concurrenten doen (
                  <Link to="/page/PidzConcurrentieanalyse">
                    Link naar concurrentieanalyse
                  </Link>
                  ). Dit is individueel gemaakt en de conclusies zijn met elkaar
                  gedeeld zodat de gehele groep (Dylano, Max en ik) bewust was
                  van de resultaten van elkaar.
                </p>
                <p>
                  Om met de laatste trends mee te gaan is er individueel
                  onderzocht welke trends er zijn die relevant waren voor het
                  product (
                  <Link to="/page/PidzTrendAnalyse">
                    Link naar trendanalyse
                  </Link>
                  ). Deze trends zijn verder onderzocht en ook hiervan zijn de
                  conclusies met elkaar gedeeld.
                </p>
                <p>
                  Met alle benoemde resultaten is een conceptdocument gemaakt
                  die geheel gebaseerd was op de voorgaande onderzoeken (
                  <Link to="/page/PidzConceptDocument">
                    Link naar conceptdocument
                  </Link>
                  ). Van dit concept is een business model gemaakt om te zien
                  waar het product waarde zal creeëren en waar extra aandacht
                  nodig is voor de gebruikers (
                  <Link to="/page/PidzBusinessModel">
                    Link naar business model
                  </Link>
                  ).
                </p>
                <p>
                  Toen dit allemaal duidelijk was is er een ontwerp gemaakt (
                  <Link to="/page/PidzOntwerpen">
                    Link naar ontwerpdocument
                  </Link>
                  ). Dit was een van de vereisten van het project. Van dit
                  ontwerp is daarna een usability test gemaakt (
                  <Link to="/page/PidzUsabilityTest">
                    Link naar usability test document
                  </Link>
                  ) om te kijken of het prototype goed bruikbaar is. Deze hangen
                  samen met elkaar omdat de resultaten van de usability test
                  verwerkt werden in het ontwerp.
                </p>
                <p>
                  Als laatst is er een communicatiestrategie gemaakt waarin een
                  advies staat waar en waarom PIDZ op bepaalde plekken media kan
                  inzetten om onder andere nieuwe gebruikres te krijgen. (
                  <Link to="/page/PidzCommunicatiestrategie">
                    Link naar communicatiestrategie
                  </Link>
                  )
                </p>
              </div>
              <div ref={Resultaat}>
                <h2>Resultaat</h2>
                <p>
                  Er is een uitgewerkt deel van het WijPIDZ platform gemaakt in
                  de vorm van een high fidelity prototype. Dit is gemaakt door
                  Dylano Hartman, Max Altena en ikzelf.
                </p>
                <div className="s-page__content__img__container__img">
                  <h3>Prototype XD</h3>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://xd.adobe.com/view/82785a97-4146-4087-6a49-f162d10fa60f-f449/"
                  >
                    <img
                      className="s-page__content__img__full"
                      alt="Prototype XD"
                      src={ProtoXD}
                    />
                  </a>
                </div>
                <div ref={Reflectie}>
                  <h2>Reflectie</h2>
                  <p>
                    Ik vond dit een erg lastig project, veel taken die
                    uitgevoerd moesten worden zag ik de logica en reden nog niet
                    van.{" "}
                  </p>
                  <p>
                    Een van de onderdelen waar ik tegenopzag was de
                    trendanalyse. Ik zag hier simpelweg het nut niet van en ik
                    wilde hier later niets mee doen. Toch kwam ik er aan het
                    einde achter waarom het nuttig is en hoe ik het uitvoer.
                  </p>
                  <p>
                    Daarnaast vond ik het lastig dat programmeren een 'extra'
                    zou zijn dit project. Hierdoor lag de motivatie wellicht wat
                    lager dan normaal, want programmeren doe ik het liefst.
                  </p>
                  <p>
                    Om goed te kunnen reflecteren zijn er uitgebreide peer
                    reviews gehouden door de groep. Hier kwam inderdaad ook uit
                    dat ik niet heel gemotiveerd was, maar toch de disipline had
                    om alles af te maken.
                  </p>
                </div>

                <div ref={Bewijs}></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};
export default Page;
