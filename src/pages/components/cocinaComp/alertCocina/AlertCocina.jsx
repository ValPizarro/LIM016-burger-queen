// import { useEffect, useState } from "react";

// import { getDoc, doc } from "firebase/firestore";
// import { db } from "../../../../firebase/config";

import NavCocina from "../navCocina/NavCocina";
import { OrderGenerados } from "./OrderGenerados";
// import OrderCard from "./components/cocinaComp/orderCard/OrderCard";

// import { Vacio } from "./components/cocinaComp/orderCard/Vacio";

export const AlertCocina = () => {
  // const [orderID, setOrderID] = useState("");
  // const [orderCompleto, setOrderCompleto] = useState({});

  // const orderByID = async (id) => {
  //   setOrderID(id);
  // };

  // const getOrderByID = async (id) => {
  //   const orderRef = doc(db, "order", id);
  //   const order = await getDoc(orderRef);
  //   return order.data();
  // };

  // useEffect(() => {
  //   async function fetchOrder() {
  //     const orderByID = await getOrderByID(orderID);

  //     setOrderCompleto(orderByID);
  //   }
  //   fetchOrder();
  // }, [orderID]);

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

  // const verificacion = Object.keys(orderCompleto).length === 0;

  return (
    <div className="contentCocina">
      <nav className="navCocina">
        <NavCocina />
      </nav>
        {/* <OrderGenerados orderByID={orderByID} /> */}
        <OrderGenerados  />

        {/* {verificacion === false ? (
          <OrderCard
            orderCompleto={orderCompleto}
            orderID={orderID}
            estilo={estilo}
            setEstilo={setEstilo}
          />
        ) : (
          <Vacio />
        )} */}
    </div>
  );
};
