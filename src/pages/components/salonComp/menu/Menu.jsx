import CardDish from "./CardDish";
import SelectMenu from "./SelectMenu";
import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import db from "../../../../firebase/config";


/* import { getDocs, collection } from "firebase/firestore";
import db from "../../firebase/config"; */

function ShowMenu(currentMenu) {
  const [allDishes, setAllDishes] = useState([{ name: "Loading...", id: "initial" }]);
  useEffect(
    () =>
      onSnapshot(collection(db, "menu"), (snapshot) =>
        setAllDishes(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );

  const filterDishes = allDishes.filter((dishes) => dishes.menu === currentMenu);
  console.log(filterDishes);

  /*  const GetMenus = async () => {
  const menus = await getDocs(collection(db, "menu"));
  menus.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  }; GetMenus(); */

  return (
    <div className="menu sectionB">
      <div className="headerMenu">
        <div className="titleMenu">
          <h2>Salón</h2>
        </div>
        <SelectMenu />
      </div>
      <div className="dishGeneral">
        {filterDishes.map((dish) => (
          <CardDish />
        ))}
      </div>
    </div>
  );
}

export default ShowMenu;
