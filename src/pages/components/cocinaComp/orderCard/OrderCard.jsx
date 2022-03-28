import { doc, updateDoc } from "firebase/firestore";
import {db} from "../../../../firebase/config";
import { useEffect, useState } from "react";

import { DetailsOrderCard } from "./DetailsOrderCard";


const OrderCard = ({ orderCompleto, orderID }) => {

  const { numOrder, stateOrder, itemsOrder } = orderCompleto;

  const [checkboxes, setCheckboxes] = useState({});

  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const cantidadItems = itemsOrder.length;
    const cantidadChecks = Object.keys(checkboxes).length;

    if (cantidadItems === cantidadChecks) {
      const laVerdad = Object.values(checkboxes).every(
        (listo) => listo === true
      );
      setCompleted(laVerdad);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkboxes]);


  const handleState = async() => {
    const orderRef = doc(db, "order", orderID);
    await updateDoc(orderRef, {
      stateOrder:"proceso",
    });
  }

  const handleStateEnd = async () => {
      const orderRef = doc(db, "order", orderID);
      await updateDoc(orderRef, {
        stateOrder: "completado",
      });
  };

    return (
      <div className="ContainerOrderCard">
        <div className="headerDescriptionOrder">
          {stateOrder === "generado" ? (
            <button
              onClick={handleState}
              className="buttonState buttonStatePendiente"
            >
              {stateOrder}
            </button>
          ) : (
            <button
              onClick={handleStateEnd}
              className="buttonState buttonStateProceso"
            >
              {stateOrder}
            </button>
          )}
          <p>{numOrder}</p>
          <p> Tiempo: 0:10:00 </p>
        </div>
        <hr />
        <div className="flexOrderDescription">
          <div className="gridTitleOrder">
            <p className="unidad">Unidad</p>
            <p className="description">Description</p>
          </div>
          {itemsOrder.map((details) => (
            <DetailsOrderCard
              details={details}
              key={details.idItemOrder}
              checkHandler={setCheckboxes}
              checkboxes={checkboxes}
            />
          ))}
        </div>
        <button disabled={!completed} onClick={()=>alert("ahhh!")}>Entregar pedido</button>
      </div>
    );
};

export default OrderCard;
