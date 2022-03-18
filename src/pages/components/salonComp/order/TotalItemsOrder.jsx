import { useState, useEffect } from "react";
import ItemOrder from "./ItemOrder";
//recibe info
const TotalItems = ({ listDishes, infoOrder, addOrder }) => {
  console.log(infoOrder)
  const [arrayItemsOrder, setArrayItemsOrder] = useState([]);
  const { nameOrder, numOrder, totalPriceOrder } = infoOrder;
  const [totalOrder, setTotalOrder] = useState(0);

  useEffect(() => {
    addOrder({
      itemsOrder:arrayItemsOrder,
      nameOrder: nameOrder,
      numOrder: numOrder,
      stateOrder: "generado",
      totalPriceOrder: totalPriceOrder,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrayItemsOrder]);

  const addItems = async (itemsOrder) => {
    setArrayItemsOrder([...arrayItemsOrder, itemsOrder]);
  };

  useEffect(() => {
    setTotalOrder(
      arrayItemsOrder.reduce(
        (total, value) => total + value.priceTotalItemOrder,
        0
      )
    );
  }, [arrayItemsOrder]);

  return (
    <>
      <div className="itemsTotalOrder">
        {listDishes.map((dish) => (
          <ItemOrder key={dish.id} dish={dish} addItems={addItems} />
        ))}
      </div>
      <div className="priceOrder">
        <p className="item1">Total: </p>
        <p className="item2">$ {totalOrder}.00</p>
      </div>
    </>
  );
};

export default TotalItems;
