export const OrderAlert = ({ newOrder }) => {

    console.log(newOrder);
  //   const handleStateEnd = async () => {
  //     const orderRef = doc(db, "order", orderID);
  //     await updateDoc(orderRef, {
  //       stateOrder: "completado",
  //     }).then(() => {
  //       // setEstilo("buttonStateCompletado");
  //       alert("Pedido entregado");
  //     });
  //   };
  return (
    <div className="ContainerOrderCard">
      <div className="headerDescriptionOrder">
        <div className="orderState orderStateGenerado">
          {/* <p>{stateOrder}</p> */}
          <p>Generado </p>
        </div>

        {/* <p>Numero de orden: {numOrder}</p> */}
        <p> Tiempo: 0:10:00 </p>
      </div>
      <hr />
      <div className="flexOrderDescription">
        <div className="gridTitleOrder">
          <p className="unidad">Unidad</p>
          <p className="description">Description</p>
        </div>
        <div className="GeneralDeilsOrderCard"></div>
        <div className="contentEntregarPedido">
          <button
          //   disabled={!completed}
          //   onClick={handleStateEnd}
          //   className="entregarPedido"
          >
            Entregar pedido
          </button>
        </div>
      </div>
    </div>
  );
};