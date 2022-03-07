// import { useState } from "react"
// import Menu from "../../dataMenu/DataMenu.json"

// // const menus = Menu;


const SelectMenu = () => {
  const optionsMenu = ["Desayuno", "Almuerzo"];

//   const [currentMenu, setCurrentMenu] = useState("Desayuno");

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
  const ChangeMenu = (e) => {
    console.log(e.target.value);
    // setCurrentMenu=e.target.value;
  };

  return (
    <div className="selectMenu">
        <select onChange={ChangeMenu}>
        {optionsMenu.map((option) => {
          return (
            <>
              <option key={option} value={option}>

                {option}
              </option>
            </>
          );
        })}
        </select>
    </div>
  );
};

export default SelectMenu;
