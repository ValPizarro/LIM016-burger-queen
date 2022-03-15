import { useState } from "react";

import TotalItems from "./TotalItemsOrder";

export const ShowOrder = ({ listDishes }) => {
  const initialOrderInfo = {
    nameOrder: "",
    numOrder: "",
    totalPriceOrder: 0,
    stateOrder: "generado",
  };

  const initialOrder = {
    nameOrder: "",
    numOrder: "",
    itemsOrder: [],
    totalPriceOrder: 0,
    stateOrder: "generado",
  };

  const [infoOrder, setinfoOrder] = useState(initialOrderInfo);
  const [order, setOrder] = useState(initialOrder);

  const addOrder = async (newOrder) => {
    setOrder(newOrder);
    console.log(order);
  };

  const handleSubmit = (order, e) => {
    e.preventDefault();

    // aqui va el firestore - addDoc
    console.log(order);
  };

  const handleChange = (e) => {
    setinfoOrder({
      ...infoOrder,
      [e.target.name]: e.target.value,
    });
  };

  const [totalOrder, setTotalOrder] = useState(0)

  return (
    <>
      <form className="formOrder" onSubmit={handleSubmit}>
        <div className="headerOrder">
          <button className="btnSubmitOrder" type="submit">
            Enviar pedido
          </button>
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
          handleSubmit={handleSubmit}
          setTotalOrder={setTotalOrder}
          addOrder={addOrder}
        />
        <div className="priceOrder">
          <p className="item1">Total: </p>
          <p className="item2">$ {totalOrder}.00</p>
        </div>
      </form>
    </>
  );
};
