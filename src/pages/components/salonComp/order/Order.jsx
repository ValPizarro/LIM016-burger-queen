import { useState } from "react";

import TotalItems from "./TotalItemsOrder";

export const ShowOrder = ({ listDishes }) => {


  // ¿Cómo realizamos extraemos el precio total? (Suma de todos los platos)

  // const initialOrder = {
  //   nameOrder: "",
  //   numOrder: "",
  //   itemsOrder: [],
  //   totalPriceOrder: 0,
  //   stateOrder: "generado",
  // };

  const initialOrderInfo = {
    nameOrder: "",
    numOrder: "",
    totalPriceOrder: 0,
    stateOrder: "generado",
  };

  const [infoOrder, setinfoOrder] = useState(initialOrderInfo);

  // const [order, setOrder] = useState(initialOrder);

  const addOrder = (order) => {
    console.log(order);
  };

  const handleSubmit = (order) => {
  //   e.preventDefault();

  //   setinfoOrder({
  //     nameOrder: infoOrder.nameOrder,
  //     numOrder: infoOrder.numOrder,
  //     totalPriceOrder: totalOrder,
  //     stateOrder: "generado",
  //   })
  };

    // setinfoOrder(initialOrderInfo);


  const handleChange = (e) => {
     setinfoOrder({
       ...infoOrder,
       [e.target.name]: e.target.value,
     });
  };

const totalOrder = 0

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
        <TotalItems listDishes={listDishes} infoOrder={infoOrder} addOrder={addOrder}/>
        <div className="priceOrder">
          <p className="item1">Total: </p>
          <p className="item2">$ {totalOrder}</p>
        </div>
      </form>
    </>
  );
};
