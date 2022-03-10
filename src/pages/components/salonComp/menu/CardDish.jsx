import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import db from "../../../../firebase/config";
import ItemOrderGeneral from "../order/ItemOrder"

const Hamburguesa = require("../../../../img/menu/menu2/burgerDouble_V1.png");

const CardDish = (data) => {

  const dataDish = data
  console.table(dataDish);

  const [menus, setMenus] = useState([{ name: "Loading...", id: "initial" }]);
  useEffect(
    () =>
      onSnapshot(collection(db, "menu"), (snapshot) =>
        setMenus(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

 let filtrado =menus;
 console.log(filtrado.menu)

 const refCard=useRef();
 
 const buttonAlmuerzo=()=>{
    filtrado.filter((menu)=> menu.menu === "desayuno")
            .map((dish)=>(console.log(dish)))
 }


//  {menus
//         .filter((menu) => menu.menu === "Desayuno")
//         .map((dish) => (
  // console.log(select);

 /*  const SelectCard = (e) => {
    const IdDish = e.target.id;
    ItemOrderGeneral(IdDish);
   }; */




  return (
    <>
    <button onClick={buttonAlmuerzo}>Almuerzo</button>
      {menus.map((dish) => (
        <div
          className="carDish"
          id={dish.id}
          key={dish.id}
          /* onClick={SelectCard} */
          ref={refCard}
          >
          
          <div className="photoDish">
            <img src={Hamburguesa} alt="Food" />
          </div>
          <div className="infoDish">
            <p className="textInfo1">{dish.name}</p>
            <p className="textInfo2">$ {dish.price}.00</p>
          </div>
        </div>
      ))}
    </>
  );
};
export default CardDish;


