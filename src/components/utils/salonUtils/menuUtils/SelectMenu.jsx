import { useState } from "react"
import Menu from "../../dataMenu/DataMenu.json"

const ShowDish = (menu) => {
   console.log(menu);

}


const SelectMenu = () => {

    const menus = Menu;

    const [IdMenu, setIdMenu] = useState('Desayuno')

    const ChangeMenu = (e) => {
        //   const currentMenu = e.target.value;
        setIdMenu(e.target.value);

        IdMenu === "Desayuno"
          ? ShowDish(menus.Almuerzo)
          : ShowDish(menus.Desayuno);


        console.log(IdMenu);
    };

    const ShowDish = (menu) => {
      console.log(menu);

      const dishes = menu.map((item) => <li key={item.id}>{item.name}</li>);
      return (
        <>
          <ul>{dishes}</ul>
        </>
      );
    };


    return (
      <div>
        <p>Carta</p>
        <select onChange={ChangeMenu}>
          <option value="Desayuno">Desayuno</option>
          <option value="Almuerzo">Almuerzo</option>
        </select>
        <ShowDish />
      </div>
    );
}

export default SelectMenu;
