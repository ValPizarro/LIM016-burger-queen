import NavSalon from "../components/utils/salonUtils/NavSalon";
import OrderList from "../containers/cocinaContainers/OrderList";
import Menu from "../containers/salonContainers/Menu";

function Salon() {
  return (
    <div>
      <NavSalon />
      <div>
        <h1>Esta es la vista de salón</h1>
        <Menu />
        <OrderList />
      </div>
    </div>
  );
}

export default Salon;
