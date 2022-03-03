 import { onSnapshot, collection } from "firebase/firestore";
import { useEffect } from "react";
import  db from "../../../../firebase/config";

const CardDish = () => {

   useEffect(()=>{
        onSnapshot(collection(db,"menu"),(snapshot)=>{
            console.log(snapshot.docs);
        });
    });


    return (
        <div>
            <button>Almuerzo</button>
                <div>
                    <img src="" alt="" />
                    <p>name</p>
                    <p>precio</p>
                </div>
        </div>
    )
}
export default CardDish;