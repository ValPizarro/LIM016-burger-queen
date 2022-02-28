const GetOrder = ({ order, deleteOrder }) => {
  const { id, nameOrder, itemOrder, stateOrder } = order;
  return (
    <li>
      <div>
        <div> {nameOrder} </div>
        <p>{itemOrder}</p>
      </div>
      <div>
        <button onClick={() => deleteOrder(id)}> Eliminar</button>
        <button>Editar</button>
          </div>
          <p>
              {stateOrder}
          </p>
    </li>
  );
};
export default GetOrder;