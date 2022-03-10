// import { onSnapshot, collection } from "firebase/firestore";
import { useState } from "react";
import ShowMenu from "../menu/Menu";

// import db from "../../../../firebase/config";


const SelectMenu = () => {
  const [menu, setMenu] = useState("Desayuno");

  const HandleMenu = (e) => {
    const currentMenu = e.target.value;
    console.log(currentMenu);
    setMenu(currentMenu);
    return ShowMenu(menu);
  };

  // useEffect(
  //   () =>
  //     onSnapshot(collection(db, "menu"), (snapshot) =>
  //       setMenu(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  //     ),
  //   []
  // );

  // const dataDesayuno = menu.filter((menu) => menu.menu === "Desayuno");
  // console.log(dataDesayuno);

  // const dataAlmuerzo = menu.filter((menu) => menu.menu === "Almuerzo");
  // console.log(dataAlmuerzo);


  // return selectValue === "Desayuno"
  //   ? CardDish("Desayuno")
  //   : CardDish("Almuerzo");


  return (
    <div className="selectMenu">
      <button value={"Desayuno"} onClick={HandleMenu}>
        Desayuno
      </button>
      <button value={"Almuerzo"} onClick={HandleMenu}>
        Almuerzo
      </button>
    </div>
  );
};

export default SelectMenu;
