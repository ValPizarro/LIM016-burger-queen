// import { async } from "@firebase/util";
// import { getDoc, doc } from "firebase/firestore";
// import db from "../../../../firebase/config";


const Hamburguesa = require("../../../../img/menu/menu2/burgerDouble_V1.png");

// export const GetDish = async (id) => {

//   const docRef = doc(db, "menu", IdDish);

//   getDoc(docRef)
//     .them((doc) => {
//       console.log(doc.data(), doc.id);
//     })
// }

const ItemOrderGeneral = (id) => {

  console.log(id);

  return (
    <div className="itemOrderBox">
      <div className="descriptionOrderItem">
        <div className="infoDish">
          <div className="photo">
            <img src={Hamburguesa} alt="Food" />
          </div>
          <div className="info">
            <p>Hamburguesa doble</p>
            <p> $15.00 </p>
          </div>
        </div>
        <div className="noteOrder">
          <textarea placeholder="Indicaciones para el chef" />
        </div>
      </div>

      <div className="buttonsOrderBox">
        <div className="deleteOrder">
          <button className="fa-regular fa-trash-can trash"></button>
        </div>
        <div className="secondRowButtons">
          <p>$15.00 </p>
        </div>
        <div className="firstRowButtons">
          {/* <i class="fa-regular fa-pen-to-square"></i> */}
          <button className="fa-regular fa-square-plus"></button>
          <p>1</p>
          <button className="fa-regular fa-square-minus"></button>
        </div>

      </div>
    </div>
  );
};

export default ItemOrderGeneral;
