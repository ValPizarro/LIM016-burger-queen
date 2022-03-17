import { collection, addDoc} from "firebase/firestore";
import { db } from "../../../../firebase/config";

const BtnSubmitOrder=({ order })=>{
    const handleSubmit =  async  (e) => {
        e.preventDefault();
        console.log(order)
        try{
        const docRef = await addDoc(collection(db, "order"), 
         order

        );
        console.log("Document written with ID: ", docRef.id);
        // aqui va el firestore - addDoc
        console.log(order)
        }catch(error){
            console.log(error)
        }

    };
    return(
    <button className="btnSubmitOrder" type="submit" onClick={handleSubmit}>
        Enviar pedido
    </button>
    )
}
export default BtnSubmitOrder;
