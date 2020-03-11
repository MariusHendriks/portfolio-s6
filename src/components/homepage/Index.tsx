import React from "react";
import Leeswijzer from "../leeswijzer/Index";
import Producten from "../producten/Index";
import Opdracht from "../opdracht/Index";
import Aanpak from "../aanpak/Index";
import Reflectie from "../reflectie/Index";

interface Props {
  data?: iVakken;
  sortedData?: iWeek[];
}

const Homepage: React.FC<Props> = ({ sortedData, data }) => {
  return (
    <div className="container">
      <Opdracht />
      <Aanpak />
      <Reflectie />
      <Producten sortedData={sortedData} />
      <Leeswijzer data={data} />
    </div>
  );
};
export default Homepage;
