import React, { useEffect } from "react";
import NavSalon from "../components/utils/salonUtils/NavSalon";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/config";

function Cocina() {

  useEffect(() => {

    const obtenerPedidos = async () => {
      const datos = await getDocs(collection(db, 'Order'));
      console.log(datos);
    }
    obtenerPedidos();
  }, []);

    return (
      <div>
        <NavSalon />
        <div>
          <h1> Esta es la vista de la cocina</h1>
        </div>
      </div>
    );
}

export default Cocina;