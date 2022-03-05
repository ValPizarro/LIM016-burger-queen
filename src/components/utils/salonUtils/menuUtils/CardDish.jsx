 import { onSnapshot, collection, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import  db from "../../../../firebase/config";

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
        <div>
            <button>Almuerzo</button>
                <div>

                {menu.map((menu)=>(
                    <>
                    <div key={menu.id}>
                    <img src="" alt="" />
                    <p>{menu.name}</p>
                    <p>{menu.price}</p>
                    </div>
                </>

                ))}



                </div>
        </div>
    )
}
export default CardDish;