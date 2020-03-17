import React from "react";

interface Props {
  name?: string | undefined;
  text?: string | undefined;
}
const Link: React.FC<Props> = ({ name, text }) => {
  if (typeof name !== "undefined" && typeof text !== "undefined") {
    return (
      <p>
        {text}{" "}
        <a target="_blank" rel="noopener noreferrer" href={name}>
          {name}
        </a>
      </p>
    );
  } else {
    return <></>;
  }
};
export default Link;
