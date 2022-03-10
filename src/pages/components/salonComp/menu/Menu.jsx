import { CardDish } from "./CardDish";
import SelectMenu from "./SelectMenu";
import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import db from "../../../../firebase/config";

const ShowMenu = () => {

  const [allDishes, setAllDishes] = useState([]);
  const [MenuDishes, SetMenuDishes] = useState([]);
  const [curretMenu, SetCurrentMenu] = useState("Desayuno");

  useEffect(
    () =>
       onSnapshot(collection(db, "menu"), (snapshot) =>
      setAllDishes(
      snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    )
  ),
    []
  );

  useEffect(
    () => {
      SetMenuDishes(allDishes.filter((dishes) => dishes.menu === curretMenu));

    }, [curretMenu, allDishes]);

    console.table(MenuDishes);

  return (
    <div className="menu sectionB">
      <div className="headerMenu">
        <div className="titleMenu">
          <h2>Salón</h2>
        </div>
        <SelectMenu SetCurrentMenu={SetCurrentMenu} />
      </div>
        <CardDish MenuDishes={MenuDishes} />
    </div>
  );
}

export default ShowMenu;