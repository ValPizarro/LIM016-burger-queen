import { useEffect, useState } from "react";

const ItemOrder = ({ dish, addItems }) => {
  const { id, name, img, price } = dish;
  let [num, setNum] = useState(1);
  const totalPrice = price * num;
  let [noteItemOrder, setNoteItemOrder] = useState("");

  useEffect(() => {
    addItems({
      extraOrder1: "huevo",
      extraOrder2: "queso",
      idItemOrder: id,
      nameItemOrder: name,
      noteOrder: noteItemOrder,
      numItemOrder: num,
      optionOrder: "carne",
      priceItemOrder: price,
      priceTotalItemOrder: totalPrice,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num, noteItemOrder]);

  const aumentar = (e) => {
    e.preventDefault();
    setNum(++num);
  };

  const disminuir = (e) => {
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
