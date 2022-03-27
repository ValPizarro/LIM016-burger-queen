import { useState, useEffect } from "react";
import ItemOrder from "./ItemOrder";
import { useOptionsContext } from "../../../context/OptionDish";

//recibe info
const TotalItems = ({ listDishes, infoOrder, addOrder }) => {
  const [arrayItemsOrder, setArrayItemsOrder] = useState([]);
  const [totalOrder, setTotalOrder] = useState(0);
  const { nameOrder, numOrder } = infoOrder;
  const { optionsDish } = useOptionsContext();

  useEffect(() => {
    console.log(optionsDish);
  }, [optionsDish]);

  useEffect(() => {
    addOrder({
      itemsOrder: arrayItemsOrder,
      nameOrder: nameOrder,
      numOrder: numOrder,
      stateOrder: "generado",
      totalPriceOrder: totalOrder,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrayItemsOrder, nameOrder, numOrder, totalOrder]);

  const addItems = (itemOrder) => {
    const { idItemOrder, noteOrder, numItemOrder, priceTotalItemOrder } =
      itemOrder;

    const foundItem = arrayItemsOrder.find(
      (item) => item.idItemOrder === idItemOrder
    );

    // console.log(foundItem);

    if (foundItem !== undefined) {
      const newArray = arrayItemsOrder.map((item) =>
        item.idItemOrder === idItemOrder
          ? {
              ...item,
              noteOrder: noteOrder,
              numItemOrder: numItemOrder,
              priceTotalItemOrder: priceTotalItemOrder,
            }
          : item
      );
      setArrayItemsOrder(newArray);
    } else {
      setArrayItemsOrder([...arrayItemsOrder, itemOrder]);
    }
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
          <ItemOrder dish={dish} addItems={addItems} key={dish.id} />
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
