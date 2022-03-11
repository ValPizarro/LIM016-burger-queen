// import { async } from "@firebase/util";
// import { getDoc, doc } from "firebase/firestore";
// import db from "../../../../firebase/config";

import { useState } from "react";


const Hamburguesa = require("../../../../img/menu/menu2/burgerDouble_V1.png");

// export const GetDish = async (id) => {

//   const docRef = doc(db, "menu", IdDish);

//   getDoc(docRef)
//     .them((doc) => {
//       console.log(doc.data(), doc.id);
//     })
// }


const ItemOrderGeneral = ({pokemon}) => {
  let [num, setNum]=useState(1)

  console.log(pokemon)
  const eliminar=(e)=>{
   e.target.parentNode.parentNode.parentNode.remove() ;
 }

 const incrementar=(e)=>{
   const idIncremenatar=e.target.dataset.id;

   const valor= e.target.parentNode;
   console.log(valor);
   console.log(idIncremenatar)
  /*  setNum(++num ) */
};
 const disminuir=()=>{setNum(--num)};

  return (<div className="itemsTotalOrder">


    {pokemon.map((pokemon)=>{
    return (
    <div  data-id={pokemon.id} className="itemOrderBox">
    <div className="descriptionOrderItem">
      <div className="infoDish">
        <div className="photo">
          <img src={Hamburguesa} alt="Food" />
        </div>
        <div className="info">
          <p>{pokemon.nombre}</p>
          <p> $15.00 </p>
        </div>
      </div>
      <div className="noteOrder">
        <textarea placeholder="Indicaciones para el chef" />
      </div>
    </div>

    <div className="buttonsOrderBox">
      <div className="deleteOrder">
        <button className="fa-regular fa-trash-can trash" onClick={eliminar}></button>
      </div>
      <div className="secondRowButtons">
        <p>$15.00 </p>
      </div>
      <div className="firstRowButtons">
        <button className="fa-regular fa-square-plus" data-id={pokemon.id} onClick={incrementar}></button>
        <p data-p={pokemon.id} className="num">{num}</p>
        <button className="fa-regular fa-square-minus" data-id={pokemon.id} onClick={disminuir}></button>
      </div>
    </div>
    </div>
    )})}

    </div>
  );
};

export default ItemOrderGeneral;
