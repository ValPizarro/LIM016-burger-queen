import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import  db from "../../../../firebase/config";
const Hamburguesa = require("../../../../img/menu/menu2/burgerDouble_V1.png");

const CardDish = () => {
    const [menus, setMenus]=useState([{ name:"Loading..." ,id:"initial" }]);
   useEffect(
       ()=>
        onSnapshot(collection(db,"menu"),(snapshot)=>
            setMenus(snapshot.docs.map(doc =>({...doc.data(), id:doc.id})))
        ),
        []
  );
  const SelectCard = (e) => {
 
      console.log(e.target.className);
    }

    return (
      <>
        {menus.map((menu) => (
          <>
            <div
              className="carDish"
              id={menu.id}
              onClick={SelectCard}
            >
              <div className="photoDish">
                <img src={Hamburguesa} alt="Food" />
              </div>
              <div className="infoDish">
                <p className="textInfo1">{menu.name}</p>
                <p className="textInfo2">$ {menu.price}.00</p>
              </div>
            </div>
          </>
        ))}
      </>
    );
}
export default CardDish;


