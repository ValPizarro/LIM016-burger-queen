import { useState } from "react";

import TotalItems from "./TotalItemsOrder";

export const ShowOrder = ({ listDishes, addOrder }) => {

  // ¿Cómo realizamos extraemos el precio total? (Suma de todos los platos)

  // const [arrayItemsOrder, setArrayItemsOrder] = useState([]);

  // const [getItemOrder, setGetItemOrder] = useState([]);

  const initialOrder = {
    nameOrder: "",
    numOrder: "",
    itemsOrder: [],
    totalPriceOrder: 0,
    stateOrder: "generado",
  };

  const [order, setOrder] = useState(initialOrder);

  const handleSubmit = (e) => {
    e.preventDefault();

    addOrder({
      nameOrder: order.nameOrder,
      numOrder: order.numOrder,
      itemsOrder: [],
      totalPriceOrder: totalOrder,
      stateOrder: "generado",
    });

    setOrder(initialOrder);

  };

  const handleChange = (e) => {
     setOrder({
      ...order,
      [e.target.name]: e.target.value
    })
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
              value={order.nameOrder}
            />
            <input
              name="numOrder"
              placeholder="Número de mesa"
              type="text"
              className="numOrder"
              onChange={handleChange}
              value={order.numOrder}
            />
          </div>
        </div>
        <TotalItems listDishes={listDishes}  />
        <div className="priceOrder">
          <p className="item1">Total: </p>
          <p className="item2">$ {totalOrder}</p>
        </div>
      </form>
    </>
  );
};
