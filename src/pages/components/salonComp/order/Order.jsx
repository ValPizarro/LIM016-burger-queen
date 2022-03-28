import { useState } from "react";
import TotalItems from "./TotalItemsOrder";

import BtnSubmitOrder from "./BtnSubmitOrder";
import { OptionsDishProvider } from "../../../context/OptionDish";

export const Order = ({ listDishes, setListDishes }) => {

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
  const [totalOrder, setTotalOrder] = useState(0);
  const [arrayItemsOrder, setArrayItemsOrder] = useState([]);


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
    setListDishes([]);
    setOrder(initialOrder);
    setinfoOrder(initialOrderInfo);
    setTotalOrder(0);
    setArrayItemsOrder([]);
    console.log("clear");
  };

  const deleteItem = (e,id) => {
    e.preventDefault();
    // e.target.parentNode.parentNode.parentNode.remove();
    console.log(id);
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
        <OptionsDishProvider>
          <TotalItems
            listDishes={listDishes}
            infoOrder={infoOrder}
            addOrder={addOrder}
            totalOrder={totalOrder}
            setTotalOrder={setTotalOrder}
            arrayItemsOrder={arrayItemsOrder}
            setArrayItemsOrder={setArrayItemsOrder}
            deleteItem={deleteItem}
          />
        </OptionsDishProvider>
      </form>
    </>
  );
};
