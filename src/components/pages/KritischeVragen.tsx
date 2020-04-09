import React from "react";
import FadeIn from "react-fade-in";
import BackButton from "../common/BackButton";

const KritischeVragen: React.FC = () => {
  return (
    <div className="s-page">
      <div className="s-page__content">
        <FadeIn>
          <BackButton />
          <h1>Kritische Vragen</h1>
          <div>
            <h2>Aanleiding</h2>
            <p>
              Dit product is gemaakt om op het goede spoor te komen om kritisch
              na te denken over de mogelijke problemen rondom de opdracht.
            </p>
          </div>
          <div>
            <h2>Methode</h2>
            <h3>Interview</h3>
            <p>
              Er zijn interviews gehouden met 3 verschillende mensen met
              verschillende functies en taken. Een was een betaalde ZZP-er, een
              deelnemer en opdrachtgever Stephan Pauly.
            </p>
          </div>
          <div>
            <h2>Verantwoording</h2>
            <p>
              Dit product is gemaakt door Mark Hendriks. Timo van de Laar heeft
              genotuleerd en toevoegende vragen gesteld.
            </p>
          </div>
          <div>
            <h2>Conclusie</h2>
            <p>
              In deze conclusie bevinden zich de concrete antwoorden op de
              vragen.
            </p>
            <ol>
              <li>
                <b>
                  Hoe wordt op dit moment de missie en visie van Stichting Ik
                  Wil gecommuniceerd naar deelnemers en bedrijven?
                </b>
                <br />
                De missie en vissie worden voornamelijk via de betaalde
                medewerkers doorgecommuniceerd naar de deelnemers. Opvallend was
                dat de geïnterviewde deelnemer dacht dat het specifiek voor
                vrouwen bedoeld was. Je kan hieruit concluderen ten niet voor
                iedereen de missie en vissie duidelijk zijn.
              </li>

              <li>
                <b>
                  Hoe wordt op dit moment de planning (van activiteiten en
                  openingsuren) gecommuniceerd naar deelnemers en is er behoefte
                  aan het mogelijk verbeteren hiervan?
                </b>
                <br />
                De planning wat betreft activiteiten worden voornamelijk via
                Whatsapp groepsapp gedeeld. Er zijn mensen bij de stichting die
                in meer dan 10 verschillende groepsapps zitten om niets te
                missen.
              </li>

              <li>
                <b>
                  Op wat voor manier en in hoeverre gebruiken deelnemers het
                  internet?
                </b>
                <br />
                De mensen bij stichting Ik Wil gebruiken de basics: Youtube,
                Google en het nieuws.
              </li>
              <li>
                <b>
                  Hoe komt en waarom is het dat deelnemers voornamelijk alleen
                  op maandag, dinsdag en donderdag op locatie zijn?
                </b>
                <br />
                Er zijn verschillende redenen waarom de deelnemers op deze dagen
                komen. De redenen zijn:
                <ul className="c-double-ul">
                  <li>
                    Woensdagmiddagen zijn veel kinderen vrij en moeten de
                    moeders voor hun kinderen zorgen.
                  </li>
                  <li>
                    Vrijdagmiddagen zijn veel islamitische kinderen vrij en
                    moeten de moeders voor hun kinderen zorgen.
                  </li>
                  <li>
                    Onwetendheid dat Stichting Ik wil op andere dagen geopend is
                    tegenwoordig.
                  </li>
                  <li>
                    Voorheen hadden de ZZP’ers de helft van de uren, waardoor ze
                    niet meer dan de genoemde dagen op konden zijn.
                  </li>
                </ul>
              </li>
              <li>
                <b>
                  Is er op dit moment behoefte aan een verbeterde uitstraling
                  van Stichting Ik Wil zelf door middel van branding?
                </b>
                <br />
                Er is zeker behoefte meer van de branding terug te laten komen.
                Er is wel een brand guide, maar deze wordt niet gebruikt.
              </li>
              <li>
                <b>
                  Zijn de kleine ondernemers ook de deelnemers van de
                  activiteiten?
                </b>
                <br />
                Ja. Alle kleine, beginnende ondernemers zijn altijd betrokken
                geweest bij activiteiten. Dit hoeft niet het geval te zijn, maar
                tot zover is dit wel zo.
              </li>
              <li>
                <b>
                  Wil en kan Stichting Ik Wil op dit moment meer bekendheid en
                  toestroming van deelnemers en bedrijven aan?
                </b>
                <br />
                Ja. Alle kleine, beginnende ondernemers zijn altijd betrokken
                geweest bij activiteiten. Dit hoeft niet het geval te zijn, maar
                tot zover is dit wel zo.
              </li>
              <li>
                <b>
                  Hoe worden op dit moment externe bedrijven,
                  onderwijsinstellingen en de overheid betrokken bij Stichting
                  Ik Wil?
                </b>
                <br />
                Er is zeker behoefte meer van de branding terug te laten komen.
                Er is wel een brand guide, maar deze wordt niet gebruikt.
                bedrijven etc enkel benaderd door werk fondsen.
              </li>
            </ol>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
export default KritischeVragen;
