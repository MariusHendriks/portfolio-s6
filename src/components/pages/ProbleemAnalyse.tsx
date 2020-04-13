import React, { useEffect } from "react";
import FadeIn from "react-fade-in";
import BackButton from "../common/BackButton";

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="s-page">
      <div className="s-page__content">
        <FadeIn>
          <BackButton />
          <h1>Probleem Analyse</h1>
          <div>
            <h2>Aanleiding</h2>
            <p>
              Dit product is gemaakt om gestructureerd onderzoek te kunnen doen.{" "}
            </p>
          </div>
          <div>
            <h2>Analyse</h2>
            <p>
              Er was geen duidelijke probleemstelling zoals bij veel andere
              projecten. Het was aan de groep om een probleem te zoeken,
              onderzoeken of het echt een probleem was en het probleem oplossen.
            </p>
            <p>
              In de eerste fase zijn er direct meerdere problemen geanalyseerd.
              Dat waren de volgende:
            </p>
            <ul className="c-double-ul">
              <li>De organisatie is non-technisch</li>
              <li>
                Er is geen overzicht welke activiteiten er waren en hoe men zich
                voor deze activiteiten kon aanmelden
              </li>
              <li>Het pand heeft geen goede uitstraling.</li>
              <li>Er is niets van de branding terug te vinden.</li>
              <li>Alles werd geregeld via tientallen whatsapp groepen</li>
            </ul>

            <p>
              Met de groep is besproken de volgende hoofdvraag te beantwoorden
            </p>
            <p>
              “Hoe kunnen we een middel maken dat Stichting Ik Wil en/of hun
              bezoekers helpt om duidelijkheid te creëren in termen van:
              activiteiten, aanwezigheid van het bestuur en andere zaken binnen
              de stichting”.
            </p>
          </div>
          <div>
            <h2>Verantwoording</h2>
            <p>Dit document is gemaakt door mij.</p>
          </div>
          <div>
            <h2>Conclusie</h2>
            <p>
              Met deze probleemanalyse kan er onderzocht worden of de gemaakte
              hypotheses ook problemen zijn voor de bezoekers van de stichting.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
export default Page;
