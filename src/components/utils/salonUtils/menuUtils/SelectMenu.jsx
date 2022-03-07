import { useState } from "react"
// import Menu from "../../dataMenu/DataMenu.json"

// // const menus = Menu;


const SelectMenu = () => {
  // const optionsMenu = ["Desayuno", "Almuerzo","Bebida"];

  // const [currentMenu, setCurrentMenu] = useState("Desayuno");

  const ChangeMenu = (e) => {
    const selectValue = (e.target.value);
    // setCurrentMenu(selectValue)
    console.log(selectValue);

    return selectValue === "Desayuno"
      ? console.log("desayuno")
      : console.log("almuerzo");
  };

  // // const ChangeMenu = (e) => {
  // //     //   const currentMenu = e.target.value;
  // //     setIdMenu(e.target.value);

  // //     IdMenu === "Desayuno"
  // //       ? ShowDish(menus.Almuerzo)
  // //       : ShowDish(menus.Desayuno);

  // //     console.log(IdMenu);
  // // };
  /* <i class="fa-solid fa-mug-hot"></i>; */

  // <i class="fa-solid fa-burger"></i>;
  // <i class="fa-solid fa-angle-up"></i>;
  /* <i class="fa-solid fa-angle-down"></i>; */

  // {optionsMenu.map((option) => {
  //   return (
  //     <>
  //       <option value={option}>
  //         {option}
  //       </option>
  //     </>

  return (
    <div className="selectMenu">
      <select onChange={ChangeMenu}>
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
