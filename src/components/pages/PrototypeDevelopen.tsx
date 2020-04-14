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
          <h1>Prototype ontwikkelen</h1>
          <div>
            <h2>Aanleiding</h2>
            <p>
              Dit product is gemaakt om beter te kunnen testen dan met een Adobe
              XD klikbaar ontwerp. Er zitten ontzettend veel textboxen in het
              product, wat volgens ons niet accuraat genoeg getest kon worden
              met enkel het ontwerp.
            </p>
          </div>
          <div>
            <h2>Methode</h2>
            <h3>Quick prototype</h3>
            <p>
              Het ontwerp is uitgewerkt met React Typescript. De laatste
              uitgewerkte versie is
              <a
                href="https://keen-ride-e1953a.netlify.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                hier te bekijken.
              </a>
            </p>
            <p>
              Het ontwerp dat is uitgewerkt is te vinden onder de volgende
              links:
              <ol>
                <li>
                  {" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://drive.google.com/file/d/1w3bAprrEO3oH3GRvxY1TX-Ny12clwSk3/view?usp=sharing"
                  >
                    <i>adobe xd bestand (download, rechtsboven)</i>
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://xd.adobe.com/view/82785a97-4146-4087-6a49-f162d10fa60f-f449/"
                  >
                    <i>adobe xd klikbaar (laatste versie)</i>
                  </a>
                </li>
              </ol>
            </p>

            <p>
              Alle versies van het prototype zijn te vinden op{" "}
              <a
                href="https://github.com/MariusHendriks/sigaar-pagebuilder-prototype-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                deze
              </a>{" "}
              Github pagina, onder het kopje 'commits'.
            </p>
            <p>
              Omdat het een quick prototype is, is er geen rekening gehouden met
              responsiveness
            </p>
          </div>
          <div>
            <h2>Verantwoording</h2>
            <p>
              Het ontwerp is gemaakt door Bart van de Klundert, het gebouwde
              product is gemaakt door mij.
            </p>
          </div>
          <div>
            <h2>Conclusie</h2>
            <p>
              Het maken van dit prototypen was erg nuttig om de user tests beter
              uit te kunnen voeren.
              {/* To-do uitbreiden */}
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
export default Page;
