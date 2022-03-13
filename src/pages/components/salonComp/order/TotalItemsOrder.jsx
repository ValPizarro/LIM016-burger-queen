// import { useEffect, useState } from "react";

// import { doc, getDoc } from "firebase/firestore";
// import db from "../../../../firebase/config";

// import Swal from "sweetalert2";

// import ItemOrder from "./ItemOrder";


// export const TotalItemsOrder = (Dish) => {

//         const [arrayDishes, setArrayDishes] = useState(null)

//         async function GetDish(IdDish) {
//             // Referencia del plato
//             const menuRef = doc(db, `menu/${IdDish}`);
//             // Burcar el plato en el menu
//             const dish = await getDoc(menuRef);
//             // Revisar si existe el plato (se usa el metodo de FB "exists()")
//             if (dish.exists()) {
//                 // si si existe lo revelar con el metodo de FB "Data()"
//                 const infoDish = dish.data()

//                 return infoDish;

//             } else {
//                 // si no existe"
//                 return Swal.fire({
//                     title: "¡Cuidado!",
//                     text: "El plato no se encuentra disponible",
//                     icon: "warning",
//                 });
//             }
//         }

//         useEffect(() => {

//             async function FetchDishes() {
//                 const dishesObtained = await GetDish(Dish);
//                 setArrayDishes(dishesObtained);
//             }
//             FetchDishes();
//         }, [Dish]);

//         return (
//             <>
//                 {arrayDishes ?
//                     <ItemOrder arrayDishes={arrayDishes} /> : null
//                 }
//             </>
//         );

//     };



// Crear documentos
// setDoc(documentoDeRef,{propiedad:{...Valor}})