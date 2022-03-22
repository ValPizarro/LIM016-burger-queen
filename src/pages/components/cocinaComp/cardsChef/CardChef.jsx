
const CardChef = ({ filterOrder }) => {
  const { nameOrder, itemsOrder, stateOrder } = filterOrder;
  let stateItem = null;

  if (stateOrder === "generado") {
   stateItem = <button className="buttonState buttonStatePendiente">{stateOrder}</button>;
  } else {
    stateItem = (
      <button className="buttonState buttonStateProceso">
        {stateOrder}
      </button>
    )
  };

  return (
    <div className="cardChef">
      {stateItem}
      <div className="textCard">
        <p>· {nameOrder} </p>
        {itemsOrder.map((item) => (
          <p>{item.nameItemOrder}</p>
        ))}
      </div>
    </div>
  );
};
export default CardChef;
