import { useState } from "react";
import ItemOrder from "./ItemOrder";
//recibe info
const TotalItems = ({ listDishes, infoOrder, addOrder }) => {
  console.log(infoOrder);

  const initialOrder = {
    nameOrder: "",
    numOrder: "",
    itemsOrder: [],
    totalPriceOrder: 0,
    stateOrder: "generado",
  };

  const [order, setOrder] = useState(initialOrder);
  const [arrayItemsOrder, setArrayItemsOrder] = useState([]);

  const { nameOrder, numOrder, totalPriceOrder } = infoOrder;

  addOrder({
    nameOrder: nameOrder,
    numOrder: numOrder,
    itemsOrder: [arrayItemsOrder],
    totalPriceOrder: totalPriceOrder,
    stateOrder: "generado",
  });

  const addItems = async (itemsOrder) => {
    setArrayItemsOrder([...arrayItemsOrder, itemsOrder]);
    console.log(arrayItemsOrder);
  };

  return (
    // boton de enviar pedido ( prop nombre / resto de info)

    <div className="itemsTotalOrder">
      {listDishes.map((dish) => (
        <ItemOrder dish={dish} addItems={addItems} />
      ))}
    </div>
  );
};

export default TotalItems;
