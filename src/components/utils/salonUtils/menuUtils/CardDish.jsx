 import { onSnapshot, collection, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import  db from "../../../../firebase/config";
const Hamburguesa = require("../../../../img/menu/menu2/burgerDouble_V1.png");

const CardDish = () => {
    const [menu, setMenu]=useState([{ name:"Loading..." ,id:"initial" }]);
    console.log(menu)
   useEffect(
       ()=>
        onSnapshot(collection(db,"menu"),(snapshot)=>
            setMenu(snapshot.docs.map(doc =>({...doc.data(), id:doc.id})))
        ),
        []
    );

    return (
        <>
                {menu.map((menu)=>(
                <>
                    <div className="carDish" key={menu.id}>
                        <div className="photoDish">
                            <img src={Hamburguesa} alt="Food" />
                        </div>
                        <div className="infoDish">
                            <p className="item1">{menu.name}</p>
                            <p className="item2">${menu.price}.00</p>
                        </div>
                    </div>
                </>
                ))}
        </>
    )
}
export default CardDish;


