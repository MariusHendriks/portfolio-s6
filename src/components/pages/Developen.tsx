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
          <h1>Developen</h1>
          <div>
            <h2>Aanleiding</h2>
            <p>
              Dit product is gemaakt omdat er voor gekozen is een gerealiseerd
              product op te leveren aan de oprachtgever.
            </p>
          </div>
          <div>
            <h2>Gebruikte talen</h2>

            <p>
              Er is in dit project met React Typescript, SCSS, Firebase en Redux
              gewerkt. De reden hiervoor is omdat de delen React en SCSS al
              bekend waren. Van Firebase en Redux was de basis bekend, en dit
              was een goede mogelijkheid daar meer in te verdiepen.
            </p>
          </div>
          <div>
            <h2>Verantwoording</h2>
            <p>
              De backend is geschreven door mij. De frontend is geschreven door
              Bart van de Klundert en Mike Hendriks. Er is 3 weken, 32+ uur per
              week per groepslid aan gewerkt.
            </p>
            <p>
              Alle code, commits, versies en issues zijn te vinden op{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/de-sigaar/ikwil-dashboard"
              >
                deze
              </a>{" "}
              Github pagina.
            </p>
            <p>
              De laatste versie van het project draait op{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ikwil-dashboard.web.app/"
              >
                deze
              </a>{" "}
              pagina.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
export default Page;
