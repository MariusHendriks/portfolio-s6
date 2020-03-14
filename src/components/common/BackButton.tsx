import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BackButton: React.FC = () => {
  return (
    <div className="o-back-button">
      <Link to="/">
        <FontAwesomeIcon icon={faHandPointLeft} />
      </Link>
    </div>
  );
};
export default BackButton;
