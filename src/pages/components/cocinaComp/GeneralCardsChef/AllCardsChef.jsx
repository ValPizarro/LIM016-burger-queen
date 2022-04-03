import CardChef from "./CardChef";

const AllCardsChef = ({ filterOrders, orderByID }) => {
console.log(filterOrders.itemsOrder)
  return (
    <div className="cardsChefGeneral">
      {filterOrders.map((filterOrder) => (
      filterOrder.itemsOrder?.length >= 0 ?<CardChef
          filterOrder={filterOrder}
          orderByID={orderByID}
          key={filterOrder.id}
        />: null
      ))}
    </div>
  );
};
export default AllCardsChef;
