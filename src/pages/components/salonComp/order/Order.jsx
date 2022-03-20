import { useState } from "react";
import TotalItems from "./TotalItemsOrder";

import BtnSubmitOrder from "./btnSubmitOrder";

export const Order = ({ listDishes }) => {
  const initialOrderInfo = {
    nameOrder: "",
    numOrder: 0,
    stateOrder: "generado",
  };
  /*orden*/
  const initialOrder = {
    itemsOrder: [],
    nameOrder: "",
    numOrder: 0,
    stateOrder: "generado",
    totalPriceOrder: 0,
  };

  const [infoOrder, setinfoOrder] = useState(initialOrderInfo);
  const [order, setOrder] = useState(initialOrder);

  const addOrder = (newOrder) => {
    setOrder(newOrder);
  };

  const handleChange = (e) => {
    setinfoOrder({
      ...infoOrder,
      [e.target.name]: e.target.value,
    });
  };

  const clearOrder = () => {
    setOrder(initialOrder);
    console.log("clear");
  };

  return (
    <>
      <form className="formOrder">
        <div className="headerOrder">
          <BtnSubmitOrder order={order} clearOrder={clearOrder} />
          <div className="infoOrder">
            <input
              name="nameOrder"
              placeholder="Nombre del cliente"
              type="text"
              className="nameOrder"
              onChange={handleChange}
              value={infoOrder.nameOrder}
            />
            <input
              name="numOrder"
              placeholder="Número de mesa"
              type="text"
              className="numOrder"
              onChange={handleChange}
              value={infoOrder.numOrder}
            />
          </div>
        </div>
          <TotalItems
          listDishes={listDishes}
          infoOrder={infoOrder}
          addOrder={addOrder}
        />
      </form>
    </>
  );
};
