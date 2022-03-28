const CardChef = ({ filterOrder, orderByID }) => {

  const IdOrder = filterOrder.id;

  const { itemsOrder } = filterOrder;

  const handleOrder = () => {
    orderByID(IdOrder);
  };

  return (
    <div className="cardChef" onClick={handleOrder}>
      <div className="timeCardChef">
        <p> Tiempo: 0:10:00 </p>
      </div>
      <div className="itemsCardChef" >
        {itemsOrder.map((item) =>
            (<p key={item.idItemOrder}>{item.nameItemOrder}</p>)

        )
        }
      </div>
    </div>
  );
};
export default CardChef;
