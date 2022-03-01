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
  const ChangeMenu = (e) => {
    console.log(e.target.value);
    // setCurrentMenu=e.target.value;
  };

  return (
    <div>
      <p>Carta</p>
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
