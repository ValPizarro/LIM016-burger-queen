// import { async } from "@firebase/util";
// import { getDoc, doc } from "firebase/firestore";
// import db from "../../../../firebase/config";

import { useRef, useState } from "react";


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
  
  let refCount=useRef();
  /* console.log(pokemon) */

  const eliminar=(e)=>{
   e.target.parentNode.parentNode.parentNode.remove() ;
 }
  const prueba=(e)=>{
    console.log(e.target.dataset.id)
  /*   console.log(refCount.current.dataset.id) */
 }

 const incrementar=(e)=>{

 console.log(refCount.current.dataset.id)
  console.log(e.target.id)
   if (refCount.target.dataset.id===e.target.id){

  setNum(++num )
   }

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
        <button className="fa-regular fa-square-plus" id={pokemon.id} onClick={incrementar}></button>
        <p className="num" data-id={pokemon.id} onClick={prueba} ref={refCount}>{num}</p>
        <button className="fa-regular fa-square-minus" data-minus={pokemon.id} onClick={disminuir}></button>
      </div>
    </div>
    </div>
    )})}

    </div>
  );
};

export default ItemOrderGeneral;
