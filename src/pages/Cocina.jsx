import { useEffect, useState } from "react";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

import NavSalon from "../pages/components/salonComp/nav/NavSalon";
import GeneralCardsChef from "./components/cocinaComp/GeneralCardsChef/GeneralCardsChef";
import OrderCard from "./components/cocinaComp/orderCard/OrderCard";

import { Vacio } from "./components/cocinaComp/orderCard/Vacio";

function Cocina() {

  const [orderID, setOrderID] = useState("");
  const [orderCompleto, setOrderCompleto] = useState({});
  console.log(orderCompleto);
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

      setOrderCompleto(orderByID);
    }
    fetchOrder();
  }, [orderID]);

  const verificacion = Object.keys(orderCompleto).length === 0;

  return (
    <div className="contentCocina">
      <nav className="navCocina">
        <NavSalon />
      </nav>
      <div className="bodyChef">
        <GeneralCardsChef orderByID={orderByID} />

        {verificacion === false ? (
          <OrderCard orderCompleto={orderCompleto}/>
        ) : (
          <Vacio />
        )}
      </div>
    </div>
  );
};

export default Cocina;
