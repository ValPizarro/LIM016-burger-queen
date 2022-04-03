import { useEffect, useState } from "react";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../../firebase/config";

import NavCocina from "../navCocina/NavCocina";
import { OrderGenerados } from "./OrderGenerados";
import { OrderAlert } from "./orderAlert/OrderAlert";

import { Vacio2 } from "./orderAlert/Vacio2";

export const AlertCocina = () => {
  const [orderID, setOrderID] = useState("");
  const [newOrder, setNewOrder] = useState({});

  const orderByID = async (id) => {
    setOrderID(id);
  };

  const getOrderByID = async (id) => {
    const orderRef = doc(db, "order", id);
    const order = await getDoc(orderRef);
    return order.data();
  };

  useEffect(() => {
    async function fetchOrder() {
      const orderByID = await getOrderByID(orderID);

      setNewOrder(orderByID);
    }
    fetchOrder();
  }, [orderID]);

  // const [estilo, setEstilo] = useState("buttonStatePendiente");

  // useEffect(() => {
  //   const estado = orderCompleto.stateOrder;

  //   const stateChange = () => {
  //     switch (estado) {
  //       case "generado":
  //         return setEstilo("buttonStatePendiente");

  //       case "proceso":
  //         return setEstilo("buttonStateProceso");

  //       default:
  //         break;
  //     }
  //   };
  //   stateChange();
  // }, [orderCompleto]);

  const verificacion = Object.keys(newOrder).length === 0;

  return (
    <div className="contentCocina">
      <nav className="navCocina">
        <NavCocina />
      </nav>
      <div className="bodyChef">

      <OrderGenerados orderByID={orderByID} />

      {verificacion === false ? (
        <OrderAlert
          newOrder={newOrder}
          // orderID={orderID}
          // estilo={estilo}
          // setEstilo={setEstilo}
        />
      ) : (
        <Vacio2 />
        )}
        </div>
    </div>
  );
};
