import NavSalon from "../pages/components/salonComp/nav/NavSalon";
import MenuCardsChef from "./components/cocinaComp/cardsChef/CardsChef";
import OrderCard from "./components/cocinaComp/orderCard/OrderCard"
function Cocina() {
  return (
    <div className="contentCocina">
      <nav className="navCocina">
        <NavSalon/>
      </nav>
      <div className="bodyChef">
        <MenuCardsChef/>
        <OrderCard/>
      </div>
    </div>
  );
}


export default Cocina;
