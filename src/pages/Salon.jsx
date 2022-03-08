import NavSalon from "../pages/components/salonComp/nav/NavSalon";
import OrderList from "../pages/components/salonComp/order/Order";
import Menu from "../pages/components/salonComp/menu/Menu";

function Salon() {
  return (
    <div className="salonGeneral">
      <NavSalon />
      <Menu />
      <OrderList />
    </div>
  );
}

export default Salon;
