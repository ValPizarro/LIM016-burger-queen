import { StateCard } from "./StateCard";

const CardChef = ({ filterOrder, orderByID }) => {

  const IdOrder = filterOrder.id;

  const { itemsOrder, stateOrder} = filterOrder;
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
      <div className="timeCardChef">
        <p> Tiempo: 0:10:00 </p>
        <br />
        <div className="itemsCardChef">
                  {itemsOrder.map((item) => (
          <p>{item.nameItemOrder}</p>
        ))}
        </div>
        <StateCard/>
      </div>
    </div>
  );
};
export default CardChef;
