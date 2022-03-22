import { useState, useEffect } from "react";

import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../../../firebase/config";

import BtnOrderChef from "./BtnOrderChef";
import AllCardsChef from "./AllCardsChef";

const CardsChef = () => {

    const [allOrder, setAllOrder] = useState([]);
    const [stateOrders, SetStateOrders] = useState([]);
    const [currentState, SetCurrentState] = useState("generado");

    useEffect(
      () =>
        onSnapshot(collection(db, "order"), (snapshot) =>
          setAllOrder(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          )
        ),
      []
  );

  useEffect(() => {
    SetStateOrders(
      allOrder.filter((orders) => orders.stateOrder === currentState)
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentState, allOrder]);

  return (
    <div className="MenuCardsChef">
      <BtnOrderChef SetCurrentState={SetCurrentState} />
      <AllCardsChef stateOrders={stateOrders} />
    </div>
  );
};
export default CardsChef;
