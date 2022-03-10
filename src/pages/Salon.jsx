import NavSalon from "../pages/components/salonComp/nav/NavSalon";
import OrderList from "../pages/components/salonComp/order/Order";
import ShowMenu from "../pages/components/salonComp/menu/Menu";

function Salon() {
  return (
    <div className="salonGeneral">
      <header className="headerSalon sectionA">
        <NavSalon />
      </header>
      <div className="bodySalon">
        <ShowMenu />
        <OrderList />
      </div>
    </div>
  );
}

export default Salon;
