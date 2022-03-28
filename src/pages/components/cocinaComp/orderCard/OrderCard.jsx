import { Mapping } from "./maping";
import { doc, updateDoc } from "firebase/firestore";
import {db} from "../../../../firebase/config";
/* import { StateCard } from "./StateCard"; */

  const OrderCard = ({ orderCompleto, orderID }) => {
  console.log(orderCompleto)
  const { numOrder, stateOrder, itemsOrder } = orderCompleto;
  // console.log(itemsOrder)

  const handleState = async() => {
    const orderRef = doc(db, "order", orderID);
    await updateDoc(orderRef, {
      stateOrder:"proceso",
    });
  }

    return (
      <div className="ContainerOrderCard">
        <header className="headerDescriptionOrder">
          {stateOrder === "generado" ? (
          <button onClick={handleState} className="buttonState buttonStatePendiente">{stateOrder}</button>
        ) : (
          <button onClick={handleState} className="buttonState buttonStateProceso">{stateOrder}</button>
        )}
          <p>{numOrder}</p>
          <p> Tiempo: 0:10:00 </p>
        </header>
        <hr />
        <div className="flexOrderDescription">
          <div className="gridTitleOrder">
            <p className="unidad">Unidad</p>
            <p className="description">Description</p>
          </div>
          <Mapping itemsOrder={itemsOrder} orderID={orderID}/>
        </div>
      <button>Entregar pedido</button>
    </div>
  );
};

export default OrderCard;
