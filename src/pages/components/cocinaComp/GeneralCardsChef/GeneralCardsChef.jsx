import { useState, useEffect } from "react";

import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../../../firebase/config";

import BtnOrderChef from "./BtnOrderChef";
import AllCardsChef from "./AllCardsChef";

const GeneralCardsChef = ({ orderByID }) => {

  const [allOrder, setAllOrder] = useState([]);
  const [filterOrders, SetFilterOrders] = useState([]);
  const [currentState, SetCurrentState] = useState("generado");

  useEffect(
    () =>
      onSnapshot(collection(db, "order"), (snapshot) =>
        setAllOrder(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  useEffect(() => {
    SetFilterOrders(
      allOrder.filter((orders) => orders.stateOrder === currentState)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentState, allOrder]);

  return (
    <div className="MenuCardsChef">
      <BtnOrderChef SetCurrentState={SetCurrentState} />
      <AllCardsChef filterOrders={filterOrders} orderByID={orderByID} />
    </div>
  );
};
export default GeneralCardsChef;
