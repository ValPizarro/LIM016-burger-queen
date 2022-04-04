import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../../firebase/config";
import { DetailsAlert } from "./DetailsAlert";
import { FunctionTime } from "../../../../utils/FunctionTime";


export const OrderAlert = ({ newOrder, orderAlertID,setEstilo }) => {

  const { stateOrder, startTime, itemsOrder } = newOrder;
  const handleState = async() => {
    const orderRef = doc(db, "order", orderAlertID);
    await updateDoc(orderRef, {
      stateOrder: "proceso",
   })
     .then(() => {
       // setEstilo("buttonStateCompletado");
        alert("Pedido procesado");
     });
  }

  return (
    <div className="detailsAlert">
      <div className="headerDescriptionOrder">
        <div>{stateOrder}</div>
        <p> Tiempo:{FunctionTime(startTime)}</p>
      </div>
      <hr />
      <div className="flexOrderDescription">
        <div className="gridTitleOrder">
          <p className="unidad">Unidad</p>
          <p className="description">Description</p>
        </div>
        <div className="GeneralDeilsOrderCard">
          {itemsOrder.map((details) => (
            <DetailsAlert details={details} key={details.idItemOrder} />
          ))}
        </div>
        <div className="contentEntregarPedido">
          <button className="entregarPedido" onClick={handleState}>
            Entregar pedido
          </button>
        </div>
      </div>
    </div>
  )
};
