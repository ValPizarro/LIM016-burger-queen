import { createContext, useState } from "react";

const ItemOrderContext = createContext();

const initialItemOrder = {
  extraOrder1: "",
  extraOrder2: "",
  idItemOrder: "",
  nameItemOrder: "",
  noteOrder: "",
  numItemOrder: 1,
  optionOrder: "",
  priceItemOrder: 0,
  priceTotalItemOrder: 0,
};

const ItemOrderProvider = ({ children }) => {
//   const [extraOrder1, setExtraOrder1] = useState("-");

//   const [extraOrder2, setExtraOrder2] = useState("-");

//   const [optionOrder, setOptionOrder] = useState("");

  const [ItemOrderGlobal, setItemOrderGlobal] = useState(initialItemOrder);

  // const addOptionsDish = (newoptionDish) => {
  //     setOptionsDish(newoptionDish);
  // };

  const dataItemOrder = {
    ItemOrderGlobal,
    setItemOrderGlobal,
  };

  return (
    <ItemOrderContext.Provider value={dataItemOrder}>
      {children}
    </ItemOrderContext.Provider>
  );
};

export { ItemOrderProvider };
export default ItemOrderContext;
