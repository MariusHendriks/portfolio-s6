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
          <h1>Voortgangspresentatie</h1>
          <div>
            <h2>Aanleiding</h2>
            <p>
              Deze presentatie is gegeven om tot de volgende stappen in het
              project te komen. Er is een skype-meeting geweest met Stephan
              Pauly (opdrachtgever), Chris Geene(docentbegeleider 1), Michiel
              Groenemeijer (docentbegeleider 2) en de groep.
            </p>
            <p>
              De presentatie is terug te vinden op Youtube op{" "}
              <a
                href="https://www.youtube.com/watch?v=FL9UQu7-wX0&feature=youtu.be"
                target="_blank"
                rel="noopener noreferrer"
              >
                deze
              </a>{" "}
              link. Zie de beschrijving voor relevante timestamps.
            </p>
            <p>
              De presentatie die is gegeven is terug is{" "}
              <a
                href="https://docs.google.com/presentation/d/1txAafN6fCNPte8uvA7QBmHLrlgekKgbjI2onbwNHI3E/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                hier
              </a>{" "}
              te bekijken. Zie de beschrijving voor relevante timestamps.
            </p>
            <p>
              In de volgende kopjes wordt er gerefereerd naar de video op de
              volgende manier: (15:15). Dit zou betekenen dat wat er is
              opgeschreven, terug te zien in de video op 15 minuut 15 bij dit
              voorbeeld.
            </p>
          </div>
          <div>
            <h2>Methode</h2>
            <h3>Presentatie</h3>
            <p>
              Met deze methode kon er op een duidelijke en gestructureerde
              manier verteld worden wat er als groep gedaan is in de afgelopen 6
              weken, en wat de vervolgstappen zijn. Er stonden vier ideeën klaar
              om besproken te worden. De groep heeft zijn voorkeur gegeven waar
              ze verder mee wilden gaan, daarna heeft Stephan keuzes gemaakt.
            </p>
            <p>
              Stephan, en het bestuur van stichting Ik Wil geven aan dat de
              voorkeur ligt bij de inschrijf app en het dashboard (20:47 /
              31:00). Stephan geeft ook aan dat de behoefte van de stichting ook
              bij deze producten ligt (22:16). Hij vond het pagebuilder idee wel
              een goed idee, maar ziet liever een ‘lite’ versie ervan in het
              dashboard verwerkt als alternatief. Er zou bijvoorbeeld enkel de
              naam en een korte introductie van de bedrijven op te zien zijn
              (24:39 / 28:07). Stephan staat achter het idee om het aanmelden
              voor activiteiten via het dashboard te kunnen laten gebeuren
              (28:26).
            </p>
          </div>
          <div>
            <h2>Verantwoording</h2>
            <p>
              De presentatie is gemaakt en gegeven door mij. Er is gekeken naar
              de conclusies en het proces van de andere duo's, en deze zijn in
              de presentatie terug te vinden.
            </p>
          </div>
          <div>
            <h2>Conclusie</h2>
            <p>
              De feedback van Stephan hebben is gebruikt om onze keuze te maken
              in de volgende stap. Dat is namelijk de app en het dashboard
              bouwen. Dit is achteraf besproken en goedgekeurd door Stephan.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
export default Page;
