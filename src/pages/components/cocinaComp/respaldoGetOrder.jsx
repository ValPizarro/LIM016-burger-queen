
const GetOrder = ({ order, deleteOrder,editOrder }) => {
  const { id, nameOrder, optionOrder } = order;
  return (
    <li>
      <div>
        <div> {nameOrder} </div>
        {/* <p>{itemOrder}</p> */}
        <p>{optionOrder}</p>
      </div>
      <div>
        <button onClick={() => deleteOrder(id)}> Eliminar</button>
        <button onClick={() => editOrder(id)}>Editar</button>
      </div>

      {/* <p>{stateOrder}</p> */}
    </li>
  );
};
export default GetOrder;