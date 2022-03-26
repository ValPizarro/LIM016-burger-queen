
const CardChef = ({ filterOrder, orderByID }) => {

  const IdOrder = filterOrder.id;
  

  const { nameOrder, itemsOrder, stateOrder} = filterOrder;
  let stateItem = null;

  const handleOrder = () => {
    orderByID(IdOrder);
  };

  if (stateOrder === "generado") {
    stateItem = (
      <button className="buttonState buttonStatePendiente">{stateOrder}</button>
    );
  } else {
    stateItem = (
      <button className="buttonState buttonStateProceso">{stateOrder}</button>
    );
  }

  return (
    <div className="cardChef" onClick={handleOrder}>
      {stateItem}
      <div className="textCard">
        <p>Cliente: {nameOrder} </p>
        <br />
        {itemsOrder.map((item) => (
          <p>{item.nameItemOrder}</p>
        ))}
      </div>
    </div>
  );
};
export default CardChef;
