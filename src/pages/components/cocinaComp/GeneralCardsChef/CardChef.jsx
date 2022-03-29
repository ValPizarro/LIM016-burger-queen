const CardChef = ({ filterOrder, orderByID }) => {

  const IdOrder = filterOrder.id;
  console.log(IdOrder);
  const { itemsOrder, stateOrder } = filterOrder;
  console.log(itemsOrder)
  const handleOrder = () => {
    orderByID(IdOrder);
  };

  return (
    <div className="cardChef" onClick={handleOrder}>
      <div className="headerCardChef">
        <p className="descriptionCampo"> Estado: </p>
        <p>{stateOrder}</p>
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
export default CardChef;
