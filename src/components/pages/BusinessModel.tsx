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
          <h1>Business model</h1>
          <div>
            <h2>Aanleiding</h2>
            <p>
              Dit document is gemaakt om de waarde van het gemaakte product in
              te schatten.
            </p>
          </div>
          <div>
            <h2>Uitvoering</h2>
            <p>
              Om tot een goed business model gekomen is er een workshop gevolgd,
              gegeven door Bob Nieme, eigenaar van Data streams. Daarnaast heb
              ik van Frank Laarakker (director product manager van Philips) een
              uitgebreide uitleg gehad over het business model canvas. Als
              laatst is er feedback en extra uitleg gevraagd aan Michiel
              Groenemeijer.
            </p>
            <p>
              Er werd een tip gegeven om de financiële status te vragen aan de
              stichting. Dit is gedaan in vorm van een skype meeting.
            </p>
          </div>
          <div>
            <h2>Verantwoording</h2>
            <p>
              Dit gehele document is door mij gemaakt. Er is geen fusie geweest
              van business modellen.
            </p>
          </div>
          <div>
            <h2>Conclusie</h2>
            <p>[Wat is het resultaat?]</p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
export default Page;
