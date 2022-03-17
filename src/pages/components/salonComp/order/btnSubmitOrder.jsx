import { collection, addDoc} from "firebase/firestore";
import { db } from "../../../../firebase/config";

const BtnSubmitOrder=({ order })=>{
    const handleSubmit =  async  (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "prueba"), {
          nameOrder: 'hola',
          numOrder: 22,
          stateOrder: "generado",
          totalPriceOrder: 22,
        });
        console.log("Document written with ID: ", docRef.id);
        // aqui va el firestore - addDoc
        console.log(order)
    };
    return(
    <button className="btnSubmitOrder" type="submit" onClick={handleSubmit}>
        Enviar pedido
    </button>
    )
}
export default BtnSubmitOrder;
