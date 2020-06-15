import React, { useEffect, useRef } from "react";
import FadeIn from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const scrollToRef = (ref: any, offset: number) =>
  window.scrollTo({ top: ref.current.offsetTop + offset, behavior: "smooth" });

const Page: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Aanleiding = useRef(null);
  const Methode = useRef(null);
  const Verantwoording = useRef(null);
  const Conclusie = useRef(null);

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
              <p>[waarom is dit product gemaakt?]</p>
            </div>
            <div ref={Methode}>
              <h2>Methode</h2>
              <h3>[methode]</h3>
              <p>[waarom deze methode]</p>
            </div>
            <div ref={Verantwoording}>
              <h2>Verantwoording</h2>
              <p>[wat is door wie gemaakt?]</p>
            </div>
            <div ref={Conclusie}>
              <h2>Conclusie</h2>
              <p>[Wat is het resultaat?]</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};
export default Page;
