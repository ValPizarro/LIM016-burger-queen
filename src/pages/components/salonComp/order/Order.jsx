import { useState } from "react";
/* import Swal from "sweetalert2"; */

import ItemOrderGeneral from "./ItemOrder"

const TakeOrder = ({ addOrder }) => {
  const pokemon=[
    {
      nombre:"pikachu",
      color:"blue",
      id:10,
      precio:10
    },
    {
      nombre:"bulbasour",
      color:"green",
      id:9,
      precio:9
    },
    {
      nombre:"charmander",
      color:"orange",
      id:11,
      precio:15
    },
 ]

  const initialOrder = {
    nameOrder: "",
    itemOrder: "",
    noteOrder: "",
    optionOrder: false,
    stateOrder: "generado",
  };

  const [order, setOrder] = useState(initialOrder);

  const handleSubmit = (e) => {
    e.preventDefault();

/*     if (!order.nameOrder.trim() && !order.itemOrder.trim()) {
      return Swal.fire({
        title: "¡Error!",
        text: "Complete la orden",
        icon: "error",
      });
    }
    if (!order.nameOrder.trim()) {
      e.target[0].focus();
      return Swal.fire({
        title: "¡Error!",
        text: "Nombre obligatorio",
        icon: "error",
      });
    }
    if (!order.itemOrder.trim()) {
      e.target[1].focus();
      return Swal.fire({
        title: "¡Error!",
        text: "Ingresa un pedido",
        icon: "error",
      });
    }

    addOrder({
      nameOrder: order.nameOrder,
      itemOrder: order.itemOrder,
      noteOrder: order.noteOrder,
      optionOrder: order.optionOrder === true ? "carne" : "",
      stateOrder: order.stateOrder,
      id: "N-011",
    });

    Swal.fire({
      title: "¡Éxito",
      text: "El pedido fue enviado",
      icon: "success",
    }); */

    setOrder(initialOrder);

  };

  /// FUNCIÓN OPTIMIZADA:
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setOrder((old) => ({
      ...old,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  let numOrder = 345
  let totalOrder = 45.001;

  return (
    <>
      <form className="formOrder sectionC" onSubmit={handleSubmit}>
        <div className="headerOrder">
          <button className="btnSubmitOrder" type="submit">
            Enviar pedido
          </button>
          <div className="infoOrder">
              <input
              name="nameOrder"
              placeholder="Nombre del cliente"
              type="text"
              className="nameOrder"
              onChange={handleChange}
              value={order.nameOrder}
            />
            <p>Orden N°: {numOrder}</p>
          </div>

        </div>
        <div >
          <ItemOrderGeneral pokemon={pokemon} />
        </div>

        {/* <input
          name="itemOrder"
          placeholder="Ingrese pedido"
          type="text"
          className="itemOrder InputOrder"
          onChange={handleChange}
          value={order.itemOrder}
        /> */}
        {/* <textarea
          name="noteOrder"
          placeholder="Anotación para el chef"
          className="note InputOrder"
          onChange={handleChange}
          value={order.noteOrder}
        /> */}
        {/* <div>
          <input
            name="optionOrder"
            type="checkbox"
            onChange={handleChange}
            checked={order.optionMeat}
          /> */}
        {/* <label> Carne</label> */}
        {/* </div> */}
        <div className="priceOrder">
          <p className="item1">Total: </p>
          <p className="item2">$ {totalOrder}</p>
        </div>
      </form>
    </>
  );
};

export default TakeOrder;

  ///para input tipo "checkbox" se emplea  e.target.checked

  /// FUNCION MEJORADA USANDO FUNCIÓN FLECHA:
      // setOrder((old) => ({
      //   ...old,
      //   [e.target.name]:
      //     e.target.type === "checkbox" ? e.target.checked : e.target.value,
      // }));

  /// FUNCION ORIGINAL:
      //  setOrder({
      //   ...order,
      //   [e.target.name]: e.target.value
      // })

  /// ERRORES: Condicional cuando se tiene que mostrar opciones:

  /// Para mostrar un error como texto y no alert
      // const [error, setError] = useState(false);
        // setError(true);
      // {
      //   error ? <ShowError /> : null;
      // }

      // tambien se puede usar
      //    {
      //       error && <ShowError />
      //     }


/// Cambiar el estado un valor
  //     const Order = () => {
  // const [order, setOrder] = useState({
  //   nameOrder: "",
  //   itemOrder: "",
  //   noteOrder: "",
  //   optionMeat: false,
  // });