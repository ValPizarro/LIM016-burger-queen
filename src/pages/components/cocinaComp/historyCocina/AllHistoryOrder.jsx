import { HistoryCard } from "./HistoryCard";

export const AllHistoryOrder = ({ filterHistory }) => {
  // console.log(filterHistory);
  return (
    <div className="contentHistory">
      {filterHistory.map((orderHistory) =>
        orderHistory.itemsOrder?.length >= 0 ? (
          <HistoryCard
            orderHistory={orderHistory}
            // orderByID={orderByID}
            key={orderHistory.id}
          />
        ) : null
      )}
    </div>
  );
};
