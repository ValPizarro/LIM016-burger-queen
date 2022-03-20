import { useEffect, useState } from "react";

// import Swal from "sweetalert2";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

import NavSalon from "../pages/components/salonComp/nav/NavSalon";
import { Order } from "./components/salonComp/order/Order";
import { Menu } from "../pages/components/salonComp/menu/Menu";


function Salon() {

  const [listDishes, setListDishes] = useState([]);
  const [dishID, setDishID] = useState([]);

  const ShowItem = async (id) => {
    setDishID(id);
  }

  const getDataByID = async (id) => {
    const dishRef = doc(db, "menu", id);
    const dish = await getDoc(dishRef);
   // console.log(dish.data())
    return dish.data();
  };

  useEffect(() => {

    async function fetchData() {
      const dataByID = await getDataByID(dishID);
      console.log(dataByID.id);
      console.log(listDishes);
      listDishes.forEach(object => {
        if (object.id === dataByID.id) {
          console.log(true);
        }
      })
      // if (listDishes.includes(dataByID) === false) {
      //   setListDishes([...listDishes, dataByID]);
      // } else {
      //   setListDishes([...listDishes]);
      // }
      setListDishes([...listDishes, dataByID]);

    }
    fetchData(listDishes);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dishID]);



  return (
    <div className="salonGeneral">
      <header className="headerSalon sectionA">
        <NavSalon />
      </header>
      <div className="bodySalon">
        <Menu ShowItem={ShowItem}  />
        <Order listDishes={listDishes}  />
      </div>
    </div>
  );
};

  export default Salon