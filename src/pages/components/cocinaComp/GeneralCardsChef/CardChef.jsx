import { FunctionTime } from "../../../utils/FunctionTime";

const CardChef = ({ filterOrder, orderByID }) => {
  console.log(orderByID)
  const IdOrder = filterOrder.id;
console.log(filterOrder.stateOrder)
  const { itemsOrder, startTime } = filterOrder;

  const handleOrder = () => {
    console.log(IdOrder)
    return orderByID(IdOrder);
  };

  return (
    <div className="cardChef" onClick={handleOrder}>

      <div className="itemsCardChef">
        {itemsOrder.map((item) => (
          <p key={item.idItemOrder}>{item.nameItemOrder}</p>
        ))}
      </div>
      <div className="headerCardChef">
        <p className="descriptionCampo"> Tiempo:</p>
        <p> {FunctionTime(startTime)} </p>
      </div>
    </div>
  );
};
export default CardChef;
