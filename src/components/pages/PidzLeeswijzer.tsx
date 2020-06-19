import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
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
          <button onClick={() => executeScroll(Bewijs, 400)}>Bewijs</button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>

      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <h1>Leeswijzer</h1>
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
                  ) is een bedrijf die zicht focust op ZZP'ers in de zorg. De
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
                  PIDZ heeft op het moment MijnPIDZ, en willen dit gaan
                  verbreden met het onderdeel WijPIDZ. Op WijPIDZ kunnen er
                  verschillende activiteiten uitgevoerd worden. Dat zijn
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
                  De gevonden problemen die opgelost, zijn duidelijker geworden
                  na mate er meer weken en onderzoek overheen is gegaan. Dit
                  zijn de problemen die gevonden zijn:
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
                    PIDZ heeft nog geen unieke punten. Wat hiermee bedoelt
                    wordt, is dat PIDZ nog geen dingen doen die concurrenten
                    niet doen.
                  </li>
                </ul>
              </div>
              <div ref={Aanpak}>
                <h2>Aanpak</h2>
                <p>
                  Tijdens dit project is er niet met een speciefiek framework
                  gewerkt om door het project heen te lopen. Er is tijdens het
                  opzetten van het project plan (
                  <Link to="/page/PidzProjectPlan">Link naar project plan</Link>
                  ) gekeken naar wat er moest gebeuren in welke volgorde, en
                  deze planning is tijdens het gehele project aangehouden.
                </p>
                <p>
                  In de eerste weken is er individueel onderzoek gedaan naar wat
                  het probleem is. Dit is gedaan door kritische vragen op te
                  stellen en door een individuele analyse te maken.{" "}
                </p>
                <p>
                  Toen het probleem duidelijk was is er een project plan
                  opgezet. In dit projectplan is het duidelijk geworden wat er
                  zal gaan gebeuren in de komende weken.
                </p>
                <p>
                  Het eerste wat onderzocht is, is wat de concurrenten doen. Dit
                  is individueel gemaakt en de conclusies zijn met elkaar
                  gedeelt zodat de gehele groep (Dylano, Max en ik) bewust was
                  van de resultaten van elkaar.
                </p>
                <p>
                  Om met de laatste trends mee te gaan is er individueel
                  onderzocht welke trends er zijn die relevant waren voor het
                  product. Deze trends zijn verder onderzocht en ook hiervan
                  zijn de conclusies met elkaar gedeelt.
                </p>
                <p>
                  Met alle benoemde resultaten is een conceptdocument gemaakt
                  die geheel gebaseerd was op de voorgaande onderzoeken. Van dit
                  concept is een business model gemaakt om te zien waar het
                  product waarde zal creeëren en waar extra aandacht nodig is
                  voor de gebruikers.
                </p>
                <p>
                  Toen dit allemaal duidelijk was is er een ontwerp gemaakt. Van
                  dit ontwerp is daarna een usability test gemaakt. Deze hangen
                  samen met elkaar omdat de resultaten van de usability test
                  verwerkt werden in het ontwerp.
                </p>
              </div>
              <div ref={Resultaat}>
                <h2>Resultaat</h2>
                <p>text</p>

                <div ref={Reflectie}>
                  <h2>Reflectie</h2>
                  <p>text</p>
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
