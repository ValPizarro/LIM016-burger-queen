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