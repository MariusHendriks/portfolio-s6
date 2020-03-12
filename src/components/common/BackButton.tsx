import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BackButton: React.FC = () => {
  return (
    <Link to="/">
      <FontAwesomeIcon icon={faArrowLeft} /> back
    </Link>
  );
};
export default BackButton;
