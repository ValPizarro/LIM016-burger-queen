export const HistoryCard = ({ orderHistory }) => {
  // const IdOrder = orderGenerada.id;

  const { itemsOrder } = orderHistory;
  //     //   const { itemsOrder, stateOrder } = orderGenerada;

  // //   const handleOrder = () => {
  // //     orderByID(IdOrder);
  // //   };
  return (
    <div className="cardChef">
      <div className="headerCardChef">
        {/* <p className="descriptionCampo"> Estado: </p> */}
        {/* <p>{stateOrder}</p> */}
        <p className="descriptionCampo"> Tiempo:</p>
        <p> 0:10:00 </p>
      </div>
      <div className="itemsCardChef">
        {itemsOrder.map((item) => (
          <p key={item.idItemOrder}>{item.nameItemOrder}</p>
        ))}
      </div>
    </div>
  );
};
