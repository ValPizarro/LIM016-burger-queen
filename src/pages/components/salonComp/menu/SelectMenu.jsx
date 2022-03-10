import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../../../../firebase/config";

import CardDish from "./CardDish";

const SelectMenu = () => {
    
  /* const [menus, setMenus] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "menu"), (snapshot) =>
        setMenus(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  const dataDesayuno = menus.filter((menu) => menu.menu === "Desayuno");
  console.log(dataDesayuno);

  const dataAlmuerzo = menus.filter((menu) => menu.menu === "Almuerzo");
  console.log(dataDesayuno);



  const SelectMenuValue = (e) => {
    const selectValue = e.target.value;

    return selectValue === "Desayuno"
      ? CardDish(dataDesayuno)
      : CardDish(dataAlmuerzo);
  } */

  // return selectValue === "Desayuno"
  //   ? CardDish("Desayuno")
  //   : CardDish("Almuerzo");


  return (
    <div className="selectMenu">
      <button value={"Desayuno"} >Desayuno</button>
      <button value={"Almuerzo"}>
        Almuerzo
      </button>
    </div>
  );
};

export default SelectMenu;
