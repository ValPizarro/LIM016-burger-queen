import CardChef from "./CardChef";

const AllCardsChef = ({ filterOrders }) => {
  console.log(filterOrders);
  return (
    <div className="cardsChefGeneral">
      {filterOrders.map((filterOrder) => (
        <CardChef filterOrder={filterOrder} key={filterOrder.id} />
      ))}
    </div>
  );
};
export default AllCardsChef;
