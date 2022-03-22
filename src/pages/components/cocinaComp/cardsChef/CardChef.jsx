
const CardChef = ({ stateOrder }) => {

  const { nameOrder } = stateOrder;
  return (
    <div className="cardChef">
      <button>Pendiente</button>
      <div className="textCard">
        <p>· {nameOrder} </p>
      </div>
    </div>
  );
};
export default CardChef;
