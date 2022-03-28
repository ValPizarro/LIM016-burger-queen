import { DetailsOrderCard } from "./DetailsOrderCard";

export const Mapping = ({ itemsOrder }) => {
  return (
    <>
      {itemsOrder.map((details) => (
        <DetailsOrderCard details={details} key={details.idItemOrder}/>
      ))}
    </>
  );
};
