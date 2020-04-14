import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton: React.FC = () => {
  const handleClick = () => {
    window.history.back();
  };

  return (
    <div className="o-back-button" onClick={() => handleClick()}>
      <FontAwesomeIcon icon={faArrowLeft} /> <i>Ga terug</i>
    </div>
  );
};
export default BackButton;
