import { FunctionTime } from "../../../utils/FunctionTime";

export const HistoryCard = ({ orderHistory }) => {

  const { itemsOrder, startTime } = orderHistory;

  return (
    <div className="backgroundCardHistoryCocina">
      <div className="cardHistoryCocina">
        <div className="detailsHistoryOrderCocina">
          {itemsOrder.map((item) => (
            <p key={item.idItemOrder}>{item.nameItemOrder}</p>
          ))}
        </div>
        <div className="headerCardChef">
          <span className="descriptionCampo"> Tiempo:</span>
          <p> {FunctionTime(startTime)} </p>
        </div>
      </div>
    </div>
  );
};
