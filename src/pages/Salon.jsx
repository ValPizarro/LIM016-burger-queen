import { useEffect, useState } from "react";

// import Swal from "sweetalert2";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

import NavSalon from "../pages/components/salonComp/nav/NavSalon";
import { ShowOrder } from "./components/salonComp/order/Order";
import { ShowMenu } from "../pages/components/salonComp/menu/Menu";

function Salon() {
  const [listDishes, setListDishes] = useState([]);
  const [dishID, setDishID] = useState([]);

  // const [orders, setOrders] = useState([]);

  const ShowItem = async (id) => {
    setDishID(id);
  }

  const getDataByID = async (id) => {
    const dishRef = doc(db, "menu", id);
    const dish = await getDoc(dishRef);
    return dish.data();
  };

  useEffect(() => {

    async function fetchData() {
      const dataByID = await getDataByID(dishID);
      setListDishes([...listDishes, dataByID])
    }
    fetchData()
  }, [dishID]);


  const addOrder = (order) => {
    console.log(order);
  };

  return (
    <div className="salonGeneral">
      <header className="headerSalon sectionA">
        <NavSalon />
      </header>
      <div className="bodySalon">
        <ShowMenu ShowItem={ShowItem} />
        <ShowOrder listDishes={listDishes}
          addOrder={addOrder}
        />
      </div>
    </div>
  );
};

  export default Salon