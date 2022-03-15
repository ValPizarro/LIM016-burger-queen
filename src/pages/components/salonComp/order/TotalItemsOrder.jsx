import { useState, useEffect } from "react";
import ItemOrder from "./ItemOrder";
//recibe info
const TotalItems = ({ listDishes, infoOrder, addOrder, setTotalOrder }) => {
  const [arrayItemsOrder, setArrayItemsOrder] = useState([]);
  console.log(arrayItemsOrder);
  const { nameOrder, numOrder, totalPriceOrder } = infoOrder;

  useEffect(() => {
    addOrder({
      nameOrder: nameOrder,
      numOrder: numOrder,
      itemsOrder: [arrayItemsOrder],
      totalPriceOrder: totalPriceOrder,
      stateOrder: "generado",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrayItemsOrder]);

  const addItems = async (itemsOrder) => {
    setArrayItemsOrder([...arrayItemsOrder, itemsOrder]);
  };


  const newPrice = arrayItemsOrder.reduce((total, value) => total + value.priceTotalItemOrder, 0)
  setTotalOrder(newPrice);

  return (
    <div className="itemsTotalOrder">
      {listDishes.map((dish) => (
        <ItemOrder key={dish.id} dish={dish} addItems={addItems} />
      ))}
    </div>
  );
};

export default TotalItems;
