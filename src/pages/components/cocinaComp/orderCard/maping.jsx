import { DetailsOrderCard } from "./DetailsOrderCard";

export const Mapping = ({ itemsOrder, orderID }) => {
  return (
    <>
      {itemsOrder.map((details) => (
        <DetailsOrderCard details={details} key={details.idItemOrder} orderID={orderID} />
      ))}
    </>
  );
};
