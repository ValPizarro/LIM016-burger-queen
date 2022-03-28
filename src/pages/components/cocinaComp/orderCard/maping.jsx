import { DetailsOrderCard } from "./DetailsOrderCard";

export const Mapping = ({ itemsOrder, orderID }) => {

  let index = -1;

  return (
    <>
      {itemsOrder.map((details) => (
        <DetailsOrderCard
          details={details}
          orderID={orderID}
          key={details.idItemOrder}
          index={++index}
        />
      ))}
    </>
  );
};
