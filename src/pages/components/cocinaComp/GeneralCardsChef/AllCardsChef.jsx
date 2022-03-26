import CardChef from "./CardChef";

const AllCardsChef = ({ filterOrders, orderByID }) => {

  return (
    <div className="cardsChefGeneral">
      {filterOrders.map((filterOrder) => (
        <CardChef
          filterOrder={filterOrder}
          orderByID={orderByID}
          key={filterOrder.id}
        />
      ))}
    </div>
  );
};
export default AllCardsChef;
