import { useRef, useState } from "react";

const ItemOrder = ({ dish, addItems }) => {

  const { name, img, price } = dish;
  let [num, setNum] = useState(1);
  const totalPrice = price * num;
  let [noteItemOrder, setNoteItemOrder] = useState("");

  addItems({
    nameItemOrder: name,
    priceItemOrder: price,
    numItemOrder: num,
    priceTotalItemOrder: totalPrice,
    noteOrder: noteItemOrder,
    optionOrder: false,
  });

  const aumentar = (e) => {
  /*console.log(refTotalPrice.current.innerHTML)
    console.log(refCantidad.current.innerHTML)*/
    e.preventDefault();
    setNum(++num);
  };

  const disminuir = (e) => {
   /*console.log(refTotalPrice.current.innerHTML)
     console.log(refCantidad.current.innerHTML)*/
    e.preventDefault();
    if (num === 1) {
      setNum(1);
    } else {
      setNum(--num);
    }
  };

  const deleteItem = (e) => {
    e.preventDefault();
    e.target.parentNode.parentNode.parentNode.remove();
  };

  const handleChange = (e) => {
    setNoteItemOrder(e.target.value);
  };

  return (
    <div className="itemOrderBox">
      <div className="descriptionOrderItem">
        <div className="infoDish">
          <div className="photo">
            <img src={img} alt="Food" />
          </div>
          <div className="info">
            <p>{name}</p>
            <p>$ {price}.00</p>
          </div>
        </div>
        <div className="noteOrder">
          <textarea
            placeholder="Indicaciones para el chef"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="buttonsOrderBox">
        <div className="deleteOrder">
          <button
            className="fa-regular fa-trash-can trash"
            onClick={deleteItem}
          />
        </div>
        <div className="secondRowButtons">
          <p>$ {totalPrice}.00 </p>
        </div>
        <div className="firstRowButtons">
          <button className="fa-regular fa-square-minus" onClick={disminuir} />
          <p>{num}</p>
          <button className="fa-regular fa-square-plus" onClick={aumentar} />

        </div>
      </div>
    </div>
  );
};

export default ItemOrder;
