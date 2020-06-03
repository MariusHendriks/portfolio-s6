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
          <h1>[documentNaam]</h1>
          <div>
            <h2>Aanleiding</h2>
            <p>[waarom is dit product gemaakt?]</p>
          </div>
          <div>
            <h2>Methode</h2>
            <h3>[methode]</h3>
            <p>[waarom deze methode]</p>
          </div>
          <div>
            <h2>Verantwoording</h2>
            <p>[wat is door wie gemaakt?]</p>
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
