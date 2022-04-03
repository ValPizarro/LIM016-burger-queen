import NavSalon from "../navSalon/NavSalon";
import { collection,onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase/config";
import { useState,useEffect } from "react";
import DetailsSalon from "./DetailsSalon";
import SectionShowAlert from "./SectionShow.jsx";
export const AlertSalon = () => {

  const [listOrdersAlert, setListOrdersAlert] = useState([]);
  const[filterOrder, setFilterOrder ]=useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "order"), (snapshot) =>
        setListOrdersAlert(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  useEffect(()=>{
      setFilterOrder(listOrdersAlert.filter((stateGenerado)=>stateGenerado.stateOrder === "generado"))
    },[listOrdersAlert])
    console.log(filterOrder)
  return (
    <div className="salonGeneral">
      <div className="headerSalon sectionA">
        <NavSalon />
      </div>
      <div className="bodyAlertSalon">
        <SectionShowAlert idfilter={filterOrder.id} filterOrder={filterOrder}/>
        <DetailsSalon/>
      </div>
    </div>
  );
};
