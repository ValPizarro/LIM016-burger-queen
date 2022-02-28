import NavSalon from "../components/utils/salonUtils/NavSalon";
import Menu from "../containers/salonContainers/Menu";

function Salon() {
  return (
    <div className="ContentLivingRoom">
      <NavSalon />
      <Menu />
      <div className="Order">
        hola
      </div>
    </div>
  );
}

export default Salon;
