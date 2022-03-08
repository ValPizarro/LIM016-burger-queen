import { useState } from "react";
import TakeOrder from "../salonContainers/Order";
import GetOrder from "./GetOrder";

const OrderList = () => {

    const [orders, setOrders] = useState([]);

    const addOrder = (order) => {
        console.log(order);
        setOrders((old) => [...old, order])
    };

    const deleteOrder = (id) => {
        setOrders((old) => old.filter((item) => item.id !== id))
    };

    const editOrder = (id) => {
        const editOrders = orders.map((item) =>
            item.id === id ? { ...item, optionOrder: !item.optionOrder } : item
        );
        setOrders(editOrders);
    };

    return (
      <>
      <div className="Order">
        <TakeOrder addOrder={addOrder} />
        {/* <h2>Lista de pedidos</h2> */}
        <ul>
          {orders.map((item) => (
            <GetOrder
              key={item.id}
              order={item}
              deleteOrder={deleteOrder}
              editOrder={editOrder}
            />
          ))}
        </ul>
      </div>
      </>
    );
};

export default OrderList;
