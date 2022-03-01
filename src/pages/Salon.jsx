import NavSalon from "../components/utils/salonUtils/NavSalon";
import OrderList from "../containers/cocinaContainers/OrderList";
import Menu from "../containers/salonContainers/Menu";

function Salon() {
  return (
    <div className="ContentLivingRoom">
      <NavSalon />
      <Menu />
      <OrderList />
    </div>
  );
}

export default Salon;
