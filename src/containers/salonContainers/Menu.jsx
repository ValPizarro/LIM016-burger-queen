import CardDish from "../../components/utils/salonUtils/menuUtils/CardDish";
import SelectMenu from "../../components/utils/salonUtils/menuUtils/SelectMenu";
/* import { getDocs, collection } from "firebase/firestore";
import db from "../../firebase/config"; */

function Menu() {

/*  const GetMenus = async () => {
  const menus = await getDocs(collection(db, "menu"));
  menus.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  }; GetMenus(); */


  return (
    <div className="menu">
      <div className="headerMenu">
        <div className="titleMenu">
          <h2>Salón</h2>
        </div>
        <SelectMenu />
      </div>
      <div className="dishGeneral">
        <CardDish />
      </div>
    </div>
  );
}

export default Menu;
