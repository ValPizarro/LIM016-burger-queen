import CardChef from "./CardChef";

const AllCardsChef = ({ stateOrders }) => {
    console.log(stateOrders);
  return (
    <div className="cardsChefGeneral">
      {stateOrders.map((stateOrder) => (
          <CardChef
              stateOrder={stateOrder}
          />
      ))}
    </div>
  );
};
export default AllCardsChef;
