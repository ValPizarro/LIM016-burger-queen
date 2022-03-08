import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../../../../firebase/config";

import CardDish from "./CardDish";

const SelectMenu = () => {

  const [menus, setMenus] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "menu"), (snapshot) =>
        setMenus(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  const dataDesayuno = menus.filter((menu) => menu.menu === "Desayuno");

  const dataAlmuerzo = menus.filter((menu) => menu.menu === "Almuerzo");

  const SelectMenuValue = (e) => {
    const selectValue = e.target.value;

    return selectValue === "Desayuno"
      ? CardDish(dataDesayuno)
      : CardDish(dataAlmuerzo);
  }

  // return selectValue === "Desayuno"
  //   ? CardDish("Desayuno")
  //   : CardDish("Almuerzo");


  return (
    <div className="selectMenu">
      <select onChange={SelectMenuValue}>
        <option key={"select-01"} value={"Desayuno"}>
          Desayuno
        </option>
        <option key={"select-02"} value={"Almuerzo"}>
          Almuerzo
        </option>
      </select>
    </div>
  );
};

export default SelectMenu;
