import React from "react";
import { Link } from "react-router-dom";

const IntroPidz: React.FC = () => {
  return (
    <div className="o-intro">
      <h1>Project PIDZ </h1>
      <div className="o-intro__text">
        <p>
          Op deze website vind je alle gemaakte documenten en producten van Mark
          Hendriks, gemaakt voor het project PIDZ.
        </p>
        <p>
          Op deze website wordt gerefereerd naar "de groep". Hiermee wordt
          bedoelt: Dylano Hartman, Noël Herwig, Mike Hendriks, Bart van de
          Klundert, Timo van de Laar en Max Altena.
        </p>
      </div>
      <br />
      <div className="o-intro__text">
        <h1>Bekijk eerst de leeswijzer!</h1>
        <p>
          Om dit project beter te begrijpen, kun je het best eerst de leeswijzer
          lezen.
        </p>
        <Link to="/pidz/leeswijzer">Naar leeswijzer</Link>
      </div>
    </div>
  );
};
export default IntroPidz;
