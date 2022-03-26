import { useEffect } from "react";
import { DetalleOrderCard } from "./DetalleOrderCard";

const OrderCard = ({ orderCompleto }) => {
  console.log(orderCompleto);
  const { numOrder, stateOrder, itemsOrder } = orderCompleto;

  useEffect(() => {
      const element = (
         <>
        {
          itemsOrder.map((detalleOrder) => (
            <DetalleOrderCard detalleOrder={detalleOrder} />
          ))
        }
      </>
      )
  }, [itemsOrder]);

  return (
    <div className="ContainerOrderCard">
      <header className="headerDescriptionOrder">
        <button>{stateOrder}</button>
        <p>{numOrder}</p>
      </header>
      <hr />
      <div className="flexOrderDescription">
        <div className="gridTitleOrder">
          <p className="unidad">Unidad</p>
          <p className="description">Description</p>
        </div>
        {/* {itemsOrder.map((detalleOrder) => (
          <DetalleOrderCard detalleOrder={detalleOrder} />
        ))} */}
        <element />
      </div>
    </div>
  );
};
export default OrderCard;
