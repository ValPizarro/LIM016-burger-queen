import React from "react";
import NavSalon from "../components/utils/salonUtils/NavSalon";
import Menu from "../containers/salonContainers/Menu";

function Salon() {
  return (
    <div>
      <NavSalon />
      <div>
        <h1>Esta es la vista de salón</h1>
          <Menu />
      </div>
    </div>
  );
}

export default Salon;
