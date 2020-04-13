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
          <h1>Eindproduct</h1>
          <h2>Klaar</h2>
          <p>Text</p>
        </FadeIn>
      </div>
    </div>
  );
};
export default Page;
