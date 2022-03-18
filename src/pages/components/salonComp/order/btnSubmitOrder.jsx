import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../firebase/config";

const BtnSubmitOrder = ({ order, clearOrder }) => {
  console.log(order);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      try {
        const docRef = await addDoc(collection(db, "order"), order);
        console.log("Document written with ID: ", docRef.id);
      }
      finally {
        clearOrder();
        console.log("se envio");
      }

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button className="btnSubmitOrder" type="submit" onClick={handleSubmit}>
      Enviar pedido
    </button>
  );
};
export default BtnSubmitOrder;
