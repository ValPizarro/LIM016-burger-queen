export const CardsOrder = ({orders}) => {
  return (
    <div className="dishGeneral">
      {orders.map((order) => {
        const { id, name } = order;

        return (
          <div
            className="carDish"
            key={id}
          >
              {name}
          </div>
        );
      })}
    </div>
  );
};
