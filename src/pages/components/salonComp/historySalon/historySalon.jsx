import NavSalon from "../navSalon/NavSalon";
import { collection,onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase/config";
import { useState,useEffect } from "react";
import BtnsHistory from "./BtnsHistory";
import SectionShowHistory from "./SectionShowHistory";

export const HistorySalon = () => {

  const [listOrderHistory, setListOrdersHistory] = useState([]);
  const [currentStateHistory,setCurrentStateHistory]=useState("")
  const[filterOrderHistory, setFilterOrderHistory ]=useState([])

  useEffect(
    () =>
      onSnapshot(collection(db, "order"), (snapshot) =>
      setListOrdersHistory(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  useEffect(()=>{
    setFilterOrderHistory(listOrderHistory.filter((stateGenerado)=>stateGenerado.stateOrder === currentStateHistory))
    },[listOrderHistory, currentStateHistory])

  return (
     <div className="salonGeneral">
        <nav className="headerSalon sectionA">
          <NavSalon />
        </nav>
        <div className="bodyHistory">
          <BtnsHistory setCurrentStateHistory={setCurrentStateHistory}/>
          <SectionShowHistory filterOrderHistory={filterOrderHistory}/>
        </div>
    </div>

  )
};
