import React, { ReactElement } from "react";
import Leeswijzer from "../leeswijzer/Index";
import Producten from "../producten/Index";
export default function Index(): ReactElement {
  return (
    <div className="container">
      <div>Homepage </div>
      <Producten />
      <Leeswijzer />
    </div>
  );
}
