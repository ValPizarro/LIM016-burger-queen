import { Mapping } from "./maping";

const OrderCard = ({ orderCompleto }) => {
  console.log(orderCompleto);


  const { numOrder, stateOrder, itemsOrder } = orderCompleto;
  
  // console.log(itemsOrder);
  

    return (
      <div className="ContainerOrderCard">
        <header className="headerDescriptionOrder">
          <button>{stateOrder}</button>
          <p>{numOrder}</p>
          <p> Tiempo: 0:10:00 </p>
        </header>
        <hr />
        <div className="flexOrderDescription">
          <div className="gridTitleOrder">
            <p className="unidad">Unidad</p>
            <p className="description">Description</p>
          </div>
          <Mapping itemsOrder={itemsOrder} />
        </div>
      </div>
    );

};

export default OrderCard;
