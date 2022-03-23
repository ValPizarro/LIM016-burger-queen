import { useState, useEffect } from "react";
import ItemOrder from "./ItemOrder";
import { OptionsDishProvider } from "../../../context/OptionDish";

//recibe info
const TotalItems = ({ listDishes, infoOrder, addOrder }) => {
  const [arrayItemsOrder, setArrayItemsOrder] = useState([]);
  const [totalOrder, setTotalOrder] = useState(0);
  const { nameOrder, numOrder } = infoOrder;

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

  const addItems = async (itemOrder) => {
    console.log(itemOrder);

    // const IdNew = itemOrder.idItemOrder;

    // arrayItemsOrder.forEach((object) => {
    //   if (object.idItemOrder === IdNew) {

    //   }
    // });
    arrayItemsOrder.map((dish) => {
      return if (arrayItemsOrder === []) {
        console.log(dish)

      }
    });
    
    // setArrayItemsOrder([...arrayItemsOrder, itemOrder]);
  };

  // setCart((prevCart) => {
  //   return prevCart.map((x) =>
  //     x.idProductCart === idProductCart
  //       ? {
  //           ...x,
  //           qty: state.count,
  //           totalCost: unitCost * state.count,
  //         }
  //       : x
  //   );
  // });

  // useEffect(() => {
  //   setTotalOrder(
  //     arrayItemsOrder.reduce(
  //       (total, value) => total + value.priceTotalItemOrder,
  //       0
  //     )
  //   );
  // }, [arrayItemsOrder]);

  return (
    <>
      <div className="itemsTotalOrder">
        {listDishes.map((dish) => (
          <OptionsDishProvider key={dish.id}>
            <ItemOrder dish={dish} addItems={addItems} />
          </OptionsDishProvider>
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
