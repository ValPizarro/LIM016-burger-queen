import CardDish from "../../components/utils/salonUtils/menuUtils/CardDish";
import SelectMenu from "../../components/utils/salonUtils/menuUtils/SelectMenu";

function Menu() {
  return (
    <div className="Menu">
      <h2>Carta: Desayuno</h2>
      <SelectMenu/>
      <div>
        <CardDish />
      </div>
    </div>
  );
}

export default Menu;
