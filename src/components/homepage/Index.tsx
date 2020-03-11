import React, { ReactElement } from "react";
import Leeswijzer from "../leeswijzer/Index";
import Producten from "../producten/Index";
import Opdracht from "../opdracht/Index";
import Aanpak from "../aanpak/Index";
import Reflectie from "../reflectie/Index";
export default function Index(): ReactElement {
  return (
    <div className="container">
      <Opdracht />
      <Aanpak />
      <Reflectie />
      <Producten />
      <Leeswijzer />
    </div>
  );
}
