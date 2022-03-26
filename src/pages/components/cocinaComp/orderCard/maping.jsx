import { DetailsOrderCard } from "./DetailsOrderCard";

export const Mapping = ({ itemsOrder }) => {
    console.log(itemsOrder);
  return (
    <>
      {itemsOrder.map((details) => (
          <DetailsOrderCard details={details} key={`D1-01`}/>
      ))}
    </>
  );
};
