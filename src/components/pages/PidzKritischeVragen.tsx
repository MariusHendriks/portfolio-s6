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
  const Uitvoering = useRef(null);
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
          <button onClick={() => executeScroll(Uitvoering, 120)}>
            Methode
          </button>
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
            <h1>Kritische Vragen</h1>
            <div>
              <div ref={Aanleiding}>
                <h2>Aanleiding</h2>
                <p>
                  De kritische vragen zijn opgesteld om beter het probleem van
                  de opdrachtgever te begrijpen, en daardoor een betere
                  probleemanalyse te kunnen opstellen.
                </p>
              </div>

              <div ref={Uitvoering}>
                <h2>Uitvoering</h2>
                <p>
                  Er zijn vragen opgesteld en per mail opgestuurd. Er is
                  antwoord gekomen op de meeste van deze vragen. De vragen die
                  onbeantwoord waren zijn alsnog gevraagd tijdens een meeting
                  waar de vraag beter geformuleerd kon worden en het duidelijk
                  was wat er met de vraag bedoelt werd.
                </p>
              </div>
              <div ref={Conclusie}>
                <h2>Conclusie</h2>
                <p>
                  In deze conclusie bevinden zich de concrete antwoorden op de
                  vragen.
                </p>
                <ol>
                  <li>
                    <b>
                      Is er al een beeld bij hoe het delen van kennis zou moeten
                      worden weergeven? Zo ja, in wat voor format? Denk hierbij
                      aan Reddit, Stackoverflow, Slack of een forum. Deze
                      informatie is nodig zodat het product niet afwijkt van de
                      verwachtingen van PIDZ.
                    </b>
                    <br />
                    De opdrachtgever heeft graag beargumenteerd advies hierover.
                  </li>

                  <li>
                    <b>
                      Mogen we 10 vragen die gesteld worden door de ZZP’ers?
                      Deze informatie is nodig om er rekening mee te kunnen
                      houden hoelang en wat de context van de vragen zijn en hoe
                      de ZZP'ers op een andere manier het antwoord hadden kunnen
                      beantwoorden.
                    </b>
                    <br />
                    Hier had de opdrachtgever geen duidelijk antwoord op. Deze
                    antwoorden zijn tevens gevonden in facebook groepen.
                  </li>

                  <li>
                    <b>
                      Hoe wordt de communicatie nu gedaan (Whatsapp, mail,
                      andere platformen)? En wat zijn de voor- en nadelen
                      hiervan? Deze informatie is nodig om erachter te komen hoe
                      formeel en op welke manier de informatie met elkaar
                      gecommuniceerd wordt.
                    </b>
                    <br />
                    Momenteel is er geen vaste plek waar de ZZP'ers zich
                    bevinden. Er zijn groepen op facebook en bijvoorbeeld ZZP
                    forums.
                  </li>

                  <li>
                    <b>
                      Hoe breed is het veld waarin de ZZP'ers zich bevinden
                      waarvoor de applicatie bedoeld is (mantelzorg, ggz,
                      thuiszorg)? Deze informatie is nodig zodat we weten of we
                      categorieën moeten toevoegen in het ontwerp.
                    </b>
                    <br />
                    Er zijn verschillende rollen binnen PIDZ. Zo zijn er
                    helpenden, verzorgenden, verpleegkundigen, gespecialiseerde
                    verpleegkundigen en begeleiders. <br />
                    De opdrachtgevers zijn verpleeg- en verzorgingshuizen,
                    ziekenhuizen, GGZ en de thuis- en gehandicaptenzorg.
                  </li>

                  <li>
                    <b>
                      In welke maten moet er rekening gehouden worden wat
                      betreft integratie van dit onderdeel binnen het WijPIDZ
                      platform? Deze informatie kunnen we gebruiken omdat dit
                      invloed kan hebben op het ontwerp.
                    </b>
                    <br />
                    Er moet aan de PIDZ-huisstijl worden voldaan.
                  </li>

                  <li>
                    <b>
                      Op welke manier worden inkomsten gegenereerd met dit
                      platform? Voorbeelden en waarom. (reclames, lease,
                      kickback, ads, etc.) Deze informatie kunnen wij gebruiken
                      zodat we kunnen nadenken over een marketing en business
                      aspect over het product.
                    </b>
                    <br />
                    De opdrachtgever heeft graag beargumenteerd advies hierover.
                  </li>
                  <li>
                    <b>
                      Is het platform bedoeld voor alle devices (mobiel, tablet,
                      pc)?
                    </b>
                    <br />
                    Ja.
                  </li>
                </ol>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};
export default Page;
