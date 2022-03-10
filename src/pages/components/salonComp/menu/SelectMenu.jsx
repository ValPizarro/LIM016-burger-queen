
const SelectMenu = ({ SetCurrentMenu }) => {

  const HandleMenu = (e) => {
    const currentMenu = e.target.value;
    return SetCurrentMenu(currentMenu);
  };

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
