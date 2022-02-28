import { useState } from "react";
import TakeOrder from "../salonContainers/Order";
import GetOrder from "../../components/utils/cocinaUtils/GetOrder";

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
        const edit = orders.map((item) => item.id === id ? { ...item, state: !item.state } : item
        )
    setOrders(edit);}


    return (
        <>
            <TakeOrder addOrder={addOrder} />
            <h2>Lista de pedidos</h2>
            <ul>
                {orders.map((item) => (
                <GetOrder
                    key={item.id} order={item} deleteOrder = {deleteOrder} editOrder={editOrder}/>
                ))}
            </ul>
      </>
    );
};

export default OrderList;
