import { FunctionTime } from "../../../utils/FunctionTime";

export const HistoryCard = ({ orderHistory }) => {

  const { itemsOrder, stateOrder, startTime } = orderHistory;

  return (
    <div className="cardChef">
      <div className="headerCardChef">
        <p className="descriptionCampo"> Estado: </p>
        <p>{stateOrder}</p>
        <p className="descriptionCampo"> Tiempo:</p>
        <p> {FunctionTime(startTime)} </p>
      </div>
      <div className="itemsCardChef">
        {itemsOrder.map((item) => (
          <p key={item.idItemOrder}>{item.nameItemOrder}</p>
        ))}
      </div>
    </div>
  );
};
