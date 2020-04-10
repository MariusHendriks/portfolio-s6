import React, { useEffect } from "react";
import FadeIn from "react-fade-in";
import BackButton from "../common/BackButton";
import { Link } from "react-router-dom";

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="s-page">
      <div className="s-page__content">
        <FadeIn>
          <BackButton />
          <h1>Brainstorm</h1>
          <div>
            <h2>Aanleiding</h2>
            <p>
              Omdat we het IDEO framework gebruikten, is er een brainstorm
              sessie gehouden.
            </p>
          </div>
          <div>
            <h2>Uitvoering</h2>
            <p>
              Met alle resultaten van de onderzoeken die gemaakt zijn in duos is
              heeft een brainstormsessie plaast gevonden. Per duo is verteld wat
              de resultaten van het onderzoek waren, waar vervolgens 10 minuten
              over is gebrainstormed. Daarna is alles gecatogoriseerd wat bij
              elkaar hoorde, en zijn alleen de nuttige ideeën gebleven. Hieruit
              zijn "How might we" vragen opgesteld. Die vragen waren:
            </p>
            <ol>
              <li>
                Hoe kunnen we het overzicht van activiteiten en inschrijvingen
                duidelijk(er) maken?
              </li>
              <li>Hoe kunnen we het bereik van de stichting vergroten?</li>
              <li>
                Hoe kunnen we de eerste indruk van de stichting verbeteren?
              </li>
            </ol>
            <p>
              Per vraag werd 10 minten gebrainstormed over mogelijke
              oplossingen. Van deze oplossingen gaf ieder zijn voorkeur aan voor
              de meest haalbare, leuke en nuttige ideeën. Daar zijn drie ideeën
              aan overgebleven die in duo's uitgewerkt zijn.
            </p>
          </div>
          <div>
            <h2>Verantwoording</h2>
            <p>
              Max Altena leidde de workshop. De rest van de groep dacht mee.
            </p>
          </div>
          <div>
            <h2>Conclusie</h2>
            <p>
              Na deze brainstorm sessie was duidelijk wat er in de volgende
              weken (ideation fase) moest gebeuren. In duo's werden de volgende
              ideeën uitgewerkt:
            </p>
            <ul className="c-double-ul">
              <li>
                <b>Een zonnestelsel.</b>
                <br />
                Dit idee zal de structuur van de stichting weergeven. Alles in
                de stichting is opgedeeld in categoriën met elk hen eigen
                activiteiten eronder. Dit zou visueel worden weergeven in een
                soort zonnestelsel. Dit idee is opgepakt door{" "}
                <i>Timo van de Laar</i>
              </li>
              <li>
                <b>Een dashboard.</b>
                <br />
                Dit idee zal duidelijkheid geven in wat de stichting precies te
                bieden heeft. De activiteiten van de komende week zullen er op
                komen staan, wat voor eten er die dag is en welk bestuur er die
                dag is. Dit idee is opgepakt door{" "}
                <i>Max Altena en Mike Hendriks</i>
                <br />
              </li>
              <li>
                <b>Een pagebuilder.</b> <br /> Dit idee helpt beginnende
                bedrijven die veel in de stichting zitten te promoten door
                eenvoudig een professionele website voor ze te genereren. Dit
                idee is opgepakt door{" "}
                <i>Mark Hendriks en Bart van de Klundert</i>
                <br />
              </li>
              <li>
                <b>Een inschrijf-app.</b>
                <br />
                Dit idee helpt de leden van de stichting overzicht te krijgen
                over welke activiteiten er bij de stichting zijn, en ze kunnen
                zich hier voor inschrijven <i>Noël Herwig en Dylano Hartman</i>
                <br />
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
export default Page;
