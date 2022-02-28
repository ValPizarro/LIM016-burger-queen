import { useRef } from "react";

const Order = () => {
  const OrderForm = useRef(null);

  const handleSubmit = (e) => {
    //Averiguar sobre formularios controlados - React

    e.preventDefault();
    const info = new FormData(OrderForm.current);
    // console.log(...info.entries());

    const objectOrder = Object.fromEntries([...info.entries()]);

    console.log(objectOrder);

    const { nameOrder, itemOrder } = objectOrder;
    if (!nameOrder.trim() || !itemOrder.trim()) {
      console.warn("El nombre o pedido esta vacio");
      return;
    }
    console.log("Pedido enviado");
  };

  return (
    <>
      <h2>Pedido del usuario</h2>
      <form ref={OrderForm} onSubmit={handleSubmit}>
        <input
          name="nameOrder"
          placeholder="Nombre del cliente"
          type="text"
          className="nameOrder"
        />
        <input
          name="itemOrder"
          placeholder="Ingrese pedido"
          type="text"
          className="itemOrder"
        />
        <textarea
          name="noteOrder"
          placeholder="Anotación para el chef"
          className="note"
        />
        <button>Enviar pedido</button>
      </form>
    </>
  );
};

export default Order;
