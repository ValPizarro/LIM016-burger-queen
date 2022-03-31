import { useState, useEffect } from "react";

import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../../../firebase/config";

import AllCardsChef from "./AllCardsChef";

const GeneralCardsChef = ({ orderByID }) => {

  const [allOrder, setAllOrder] = useState([]);
  const [filterOrders, SetFilterOrders] = useState([]);
<<<<<<< HEAD
  // const [currentState, SetCurrentState] = useState("generado");

=======
  const [currentState, SetCurrentState] = useState("generado");
  console.log(filterOrders)
>>>>>>> 786b6dc7bbd4ae3b92cf61adcb08c556c695f889
  useEffect(
    () =>
      onSnapshot(collection(db, "order"), (snapshot) =>
        setAllOrder(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  useEffect(() => {
    SetFilterOrders(
      allOrder.filter((orders) => orders.stateOrder === "proceso")
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allOrder]);

  return (
    <div className="MenuCardsChef">
      <div className="gridBtnChef">
        <h2>Pedidos en proceso</h2>
      </div>

      <AllCardsChef filterOrders={filterOrders} orderByID={orderByID} />
    </div>
  );
};
export default GeneralCardsChef;
