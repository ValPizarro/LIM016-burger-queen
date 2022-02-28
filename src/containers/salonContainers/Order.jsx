import { useState } from "react";
import Swal from "sweetalert2";

const TakeOrder = ({ addOrder }) => {
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

    if (!order.nameOrder.trim() && !order.itemOrder.trim()) {
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
    });

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

  return (
    <>
      <h2>Ingrese el Pedido</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="nameOrder"
          placeholder="Nombre del cliente"
          type="text"
          className="nameOrder"
          onChange={handleChange}
          value={order.nameOrder}
        />
        <input
          name="itemOrder"
          placeholder="Ingrese pedido"
          type="text"
          className="itemOrder"
          onChange={handleChange}
          value={order.itemOrder}
        />
        <textarea
          name="noteOrder"
          placeholder="Anotación para el chef"
          className="note"
          onChange={handleChange}
          value={order.noteOrder}
        />
        <div>
          <input
            name="optionOrder"
            type="checkbox"
            onChange={handleChange}
            checked={order.optionMeat}
          />
          <label> Carne</label>
        </div>
        <button type="submit">Enviar pedido</button>
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