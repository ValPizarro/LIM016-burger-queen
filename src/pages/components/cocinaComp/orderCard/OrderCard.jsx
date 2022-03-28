import { Mapping } from "./maping";

const OrderCard = ({ orderCompleto, orderID }) => {
  console.log(orderCompleto);

  const { numOrder, itemsOrder } = orderCompleto;

  // console.log(itemsOrder);

  return (
    <div className="ContainerOrderCard">
      <header className="headerDescriptionOrder">
        {/* <button className="buttonState buttonStatePendiente">
          {stateOrder}
        </button> */}
        <button className="buttonState buttonStateProceso">En proceso</button>

        <p>{numOrder}</p>
        <p> Tiempo: 0:10:00 </p>
      </header>
      <hr />
      <div className="flexOrderDescription">
        <div className="gridTitleOrder">
          <p className="unidad">Unidad</p>
          <p className="description">Description</p>
        </div>
        <Mapping itemsOrder={itemsOrder} orderID={orderID} />
      </div>
      <button>Entregar pedido</button>
    </div>
  );
};

export default OrderCard;
