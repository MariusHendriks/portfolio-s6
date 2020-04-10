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
          <h1>Usability Test</h1>
          <div>
            <h2>Aanleiding</h2>
            <p>
              Dit product is gemaakt om het gebouwde prototype te testen. Om de
              laatste versie van het geteste prototype te bekijken, klik{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://keen-ride-e1953a.netlify.com/"
              >
                hier.
              </a>
            </p>
          </div>
          <div>
            <h2>Methode</h2>
            <h3>Thinking aloud</h3>
            <p>
              Deze methode is gekozen omdat het erg belangrijk is dat wat de
              doelgroep denkt over de workflow van het prototype. Doordat de
              kandidaten hardop vertellen wat ze zien en wat ze doen is het snel
              duidelijk waar de kandidaten tegen aan lopen. Als meerdere
              kandidaten tegen hetzelfde probleem aanliepen of als het een
              logisch probleem was werd het opgelost in een volgende iteratie.
            </p>
          </div>
          <div>
            <h2>Verantwoording</h2>
            <p>
              De test is opgezet door Bart van de Klundert, terwijl ik het
              prototype aan het bouwen was (meer hierover in
              <Link to="/page/PrototypeDevelopen"> dit document</Link>).
            </p>
            <p>
              De eerste iteratie is getest met 3 personen en de tweede iteratie
              is getest met 3 personen. Vijf van de zes tests zijn uitgevoerd
              door mij, één door Bart.
            </p>
          </div>
          <div>
            <h2>Conclusie</h2>

            <p>
              Vanwege het coronavirus kon er niet optimaal getest worden. De
              gewenste testpersonen waren enkel beginnende ondernemers en
              kartrekkers, maar deze waren niet te vinden in de stichting
              vanwege het coronavirus.
            </p>
            <p>
              De eerste versie is getest met twee ondernemers en één kartrekker.
              De resultaten die we hebben besloten te verwerken in de volgende
              iteratie waren:
            </p>
            <ol className="c-basic-ol">
              <li>
                De persoonlijke informatie was onduidelijk, mensen vulde al gauw
                de informatie over het bedrijf in, in plaats van hun eigen
                informatie.
              </li>
              <li>Een logo toevoegen mistte.</li>
              <li>Een optionele website mistte.</li>
            </ol>
            <p>
              De tweede iteratie is getest met twee coördinatoren en een
              kartrekker. Het enige resultaat dat besloten is verwerkt te worden
              is een mogelijkheid aan te klikken dat je een ZZP-er / coördinator
              bent, zodat je geen openingstijden hebt.
            </p>
            <p>
              Er is een derde iteratie gemaak. Voordat deze klaar was, is door
              de Nederlandse overheid de stichting gesloten voor ten minste een
              maand. In deze tijd is er een{" "}
              <Link to="/pages/VoortgangsPresentatie.tsx">
                presentatie gegeven
              </Link>
              met alle gemaakte producten en komt dit product op een andere,
              kleinere manier terug waardoor deze derde versie irrelevant is
              geworden.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
export default Page;
