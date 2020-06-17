import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Zoom from "react-medium-image-zoom";
import Change from "../../img/change.png";

const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Aanleiding = useRef(null);
  const Methode = useRef(null);
  const Verantwoording = useRef(null);
  const Uitvoering = useRef(null);
  const Conclusie = useRef(null);
  const Procedure = useRef(null);

  const executeScroll = (reference: any, offset?: number) => {
    if (typeof offset === "undefined") {
      offset = 0;
    }
    scrollToRef(reference, offset);
  };
  return (
    <>
      <div className="o-pagenav">
        <div className="o-pagenav__nav" onClick={() => window.history.back()}>
          <FontAwesomeIcon icon={faArrowLeft} /> <i>Ga terug</i>
        </div>
        <div>
          <button onClick={() => executeScroll(Aanleiding, 120)}>
            Aanleiding
          </button>
          <button onClick={() => executeScroll(Methode, 120)}>Methode</button>
          <button onClick={() => executeScroll(Verantwoording, 120)}>
            Verantwoording
          </button>
          <button onClick={() => executeScroll(Procedure, 120)}>
            Procedure
          </button>
          <button onClick={() => executeScroll(Uitvoering, 120)}>
            Uitvoering
          </button>
          <button onClick={() => executeScroll(Conclusie, 120)}>
            Conclusie
          </button>
        </div>
        <div className="o-pagenav__fill"></div>
      </div>
      <div className="s-page">
        <div className="s-page__content">
          <FadeIn>
            <h1>Projectplan</h1>
            <div ref={Aanleiding}>
              <h2>Aanleiding</h2>
              <p>
                Dit product is gemaakt om het gebouwde prototype te testen. Deze
                tests zijn van belang om tot een beter eindproduct te komen. Er
                werd met de resultaten van deze test een iteratie gemaakt op het
                bestaande ontwerp. Deze werd vervolgens verwerkt in het
                prototype.
              </p>
              <p>
                Er is niet met ZZP’ers getest. Helaas had PIDZ niet voldoende
                gebruikers om alle benodigde gebruikerstesten te doen. Er is
                getest met vrienden, ouders en kennissen. Dit is niet ideaal,
                maar met minder ideale personen testen is beter dan niet testen.
              </p>
            </div>
            <div ref={Methode}>
              <h2>Methode</h2>
              <h3>Thinking aloud</h3>
              <p>
                Deze methode is gekozen omdat het belangrijk is dat wat de
                doelgroep denkt over de workflow van het prototype. Doordat de
                kandidaten hardop vertellen wat ze zien en wat ze doen is het
                snel duidelijk waar de kandidaten tegen aan lopen. Als meerdere
                kandidaten tegen hetzelfde probleem aanlopen of als het een
                logisch probleem was werd het opgelost in een volgende iteratie.
              </p>
            </div>
            <div ref={Verantwoording}>
              <h2>Verantwoording</h2>
              <p>
                Het prototype is gemaakt door Dylano Hartman, Max altena en
                ikzelf. De test is gemaakt en uitgevoerd door mij. De conclusies
                van de tests zijn gedeelt met Dylano en Max, en verwerkt in
                nieuwe iteraties waarmee verdere tests uitgevoerd zijn.
              </p>
            </div>
            <div ref={Procedure}>
              <h2>Procedure</h2>
              <p>De tests zijn op verschillende manieren gehouden.</p>
              <p>
                <b>Manier 1: Teams.</b>
                <br />
                Er zal gevraagd worden van de testpersoon of hij/zij de camera
                aan zet, en zijn/haar scherm wilt delen. Zodra dit akkoord is
                zal het prototype worden opgestuurd. Zodra deze in goede orde is
                geopend zal er aan de testpersoon verteld worden wat zijn/haar
                taak is. Na afloop zullen er vragen gesteld worden.
              </p>
              <p>
                <b>Manier 2: Fysiek.</b>
                <br />
                Er zal fysiek getest worden op een laptop waar het prototype al
                klaar staat. Hier wordt de test op de ‘normale’ manier
                uitgevoerd. Ook hier zullen de taken mondeling gecommuniceerd
                worden en moeten uitgevoerd worden door de testpersoon.
              </p>
            </div>
            <div ref={Uitvoering}>
              <h2>Uitvoering</h2>
              <p>
                De gemaakte gebruikerstesten zijn te vinden op{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.youtube.com/watch?v=F6G5p-RnA6g&list=PLMWlQzQKAU5m9UGNoi-mbT3fVUFjFY32-&index=1"
                >
                  deze youtube playlist{" "}
                </a>
                Link naar youtube. Alle toestemmingen zijn gegeven vóór de
                opname begon.
              </p>
            </div>
            <div ref={Conclusie}>
              <h2>Conclusie</h2>
              <h3>Iteratie 1 naar 2</h3>
              <p>
                De eerste iteratie is met vijf personen getest. Het
                belangrijkste dat er uit kwam, is dat twee van de vijf
                gebruikers niet wisten hoe ze het beste antwoord konden
                aangeven. Er werd al snel op de upvote knop gedrukt in plaats
                van het vinkje. Een passende oplossing is vermoedelijk het
                vinkje een zogenaamde ‘hover state’ geven, en de grootte van de
                knop vergroten.
              </p>
              <p>
                Een iets minder grote issue is dat het niet genoeg opviel dat er
                een nieuw chatbericht was. Dit gaat in de tweede iteratie
                verbeterd worden door een korte delay te zetten op wanneer het
                chatbericht binnenkomt.
              </p>

              <div className="s-page__content__img__container__img">
                <h3>Verschil iteratie 1 en 2</h3>
                <Zoom>
                  <img
                    className="s-page__content__img__full"
                    alt="change"
                    src={Change}
                  />
                </Zoom>
              </div>
              <div>
                <h3>Iteratie 2 naar 2.5</h3>
                <p>
                  De personen probeerde altijd het beste antwoord te selecteren
                  door te upvoten. Nu is het zo dat de eerste upvote ook het
                  beste antwoord instelt.{" "}
                </p>
                <h3>Iteratie 2.5</h3>
                <p>
                  Iteratie twee is met vier gebruikers getest. Er waren geen
                  bijzonderheden die uit deze test kwamen. De issue die er nog
                  was is hierboven benoemd en is sindsdien geen probleem meer
                  geweest.{" "}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};
export default Page;
