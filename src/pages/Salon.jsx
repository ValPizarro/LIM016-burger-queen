import { useState } from "react";

// import Swal from "sweetalert2";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

import NavSalon from "../pages/components/salonComp/nav/NavSalon";
import { ShowOrder } from "./components/salonComp/order/Order";
import { ShowMenu } from "../pages/components/salonComp/menu/Menu";

function Salon() {
  const [dataDish, setDataDish] = useState([]);
  const [listDishes, setListDishes] = useState([]);

  const ShowItem = async (id) => {
    const dishRef = doc(db, "menu", id);
    const dish = await getDoc(dishRef);
    const infoDish = dish.data();


    setDataDish(infoDish);

   listDishes.push(dataDish);

    // setDataDish(infoDish);
  
    // if (listDishes.length !== 0) {
    //   setListDishes([...listDishes, dataDish]);
    //   console.table(listDishes);
    // } else {

    // setListDishes(infoDish);


      // const newDataDishes = listDishes.push(dataDish);
      // setListDishes(newDataDishes);
      // console.table(listDishes);
    
  }

  //   if (listDishes.length === 0) {
  //     console.log("no hay platos");
  //     setListDishes(dataDish);
  //     console.table(listDishes);

  //   } else {
  //     console.log("si hay platos");

  //     setListDishes(listDishes.push(dataDish));
  //     console.table(listDishes);

  //     // setDataDish([...listDishes, dataDish]);

  //   }
  // }

  // if (listDishes.length === 0) {
  //   setListDishes(infoDish);
  //   console.table(listDishes);
  // }
  // } else {
  //   setListDishes([...listDishes, listDishes]);

  //   console.table(listDishes);
  // }

  // setListDishes([...listDishes, dataDish]);
  // console.log(listDishes);


  return (
    <div className="salonGeneral">
      <header className="headerSalon sectionA">
        <NavSalon />
      </header>
      <div className="bodySalon">
        <ShowMenu ShowItem={ShowItem} />
        <div className="Order">
          <ShowOrder />
          {/* <ShowOrder dataDish={dataDish} listDishes={listDishes} /> */}
        </div>
      </div>
    </div>
  );
};

  export default Salon