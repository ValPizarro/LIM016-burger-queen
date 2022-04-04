import DetailsSalon from "./DetailsSalon";
import { FunctionTime } from "../../../../utils/FunctionTime";
import { doc,updateDoc } from "firebase/firestore";
import { db } from "../../../../../firebase/config"
const OrderAlert=({newOrderList,orderAlertIdSalon})=>{
    
    const { stateOrder, startTime, itemsOrder}= newOrderList;
    const handleState = async() => {
        const orderRef = doc(db, "order", orderAlertIdSalon);
        await updateDoc(orderRef, {
          stateOrder: "EntregadoAlUsuario",
       })
       .then(() => {
        // setEstilo("buttonStateCompletado");
         alert("Entregar pedido al usuario");
      });
    }
    console.log(stateOrder)
    return(
        <div className="detailsSalon">
        <div className="headerDescriptionOrder">
            <div>
                {stateOrder}
            </div>
            <p>Numero de orden: #1000</p>
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
                <DetailsSalon details={details} key={details.idItemOrder} />
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
     }
export default OrderAlert;

