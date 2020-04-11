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
          <h1>Onderzoek: Hoe zien de processen binnen de stichting er uit?</h1>
          <div>
            <h2>Aanleiding</h2>
            <p>
              Dit product is gemaakt om de deelvraag "Hoe zien de processen
              binnen de stichting er uit?" te beantwoorden. Deze deelvraag is
              deel van de hoofdvraag: : “Hoe kunnen we een middel maken dat
              Stichting Ik Wil en/of hun bezoekers helpt om duidelijkheid te
              creëren in termen van: activiteiten, aanwezigheid van het bestuur
              en andere zaken binnen de stichting”.
            </p>
          </div>
          <div>
            <h2>Methodes</h2>
            <div>
              <h3>A day in the life</h3>
              <p>
                Deze methode is gebruikt om te leren hoe men zich aanmeldt voor
                een activiteit, hoe de activiteit verloopt (bijvoorbeeld welke
                talen er gesproken worden, hoe de communicatie met de kartrekker
                is etc.)
              </p>
            </div>
          </div>
          <div>
            <h2>Verantwoording</h2>
            <p>Dit product is gemaakt door Mij en Timo van de Laar.</p>
            <p>
              Timo heeft andere onderzoeken gemaakt die toevoeging hadden voor
              de conclusie van dit document. Timo heeft 2 andere onderzoeken
              uitgevoerd, namelijk een Customer journey en een interview met de
              opdrachtgever.
            </p>
          </div>
          <div>
            <h2>Conclusie</h2>
            <p>
              Uit dit onderzoek zijn verschillende dingen gebleken. Een bezoeker
              komt bij Stichting Ik Wil met een van de volgende drie
              mogelijkheden; Ik wil iets, Ik heb een idee en ik heb hulp nodig.
              Dit wordt verwerkt tijdens het inloopuur, hier worden bezoekers
              gekoppeld aan een verbinder en daarna aan een activiteit. Het kan
              voorkomen dat een bezoeker interesse heeft in meerdere
              activiteiten. Het is voor de (nieuwe) bezoekers nu niet duidelijk
              welke activiteiten en mogelijkheden er zijn en hoe ze zich
              hiervoor kunnen aanmelden. De bezoekers weten wel dat ze bij de
              verbinders terecht kunnen om achter deze informatie te komen. Het
              risico hierbij is dat deelnemers niet weten welke andere
              activiteiten er zijn en hier dus ook niet aan deelnemen.
            </p>
            <p>
              Vooraf was niets over de activiteit besproken behalve de
              starttijd. Tijdens de activiteit was er de mogelijkheid om zelf te
              werken, maar er was geen gezamenlijke uitleg. De lesvorm bestond
              uit individuele uitleg. De voertaal is de taal waar de deelnemers
              zich het meest comfortabel bij voelen er werden dus verschillende
              talen gesproken. Dit werd door de deelnemers als prettig ervaren.
              Deze lesvorm zorgt ervoor dat het niveauverschil tussen de
              verschillende bezoekers niet storend is.
            </p>
            <h3>Concrete problemen</h3>
            <ol className="c-basic-ol">
              <li>Aanmelden voor activiteiten is onduidelijk</li>
              <li>
                Geen overzicht van activiteiten en mogelijkheden waardoor
                deelnemers niet optimaal mee kunnen doen
              </li>
              <li>Er kan een taalbarrière zijn tijdens activiteiten </li>
              <li>Sommige kartrekkers kunnen nauwelijks tot geen Nederlands</li>
            </ol>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
export default Page;
