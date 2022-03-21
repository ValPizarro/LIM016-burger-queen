import { useEffect, useState, useContext } from "react";
import OptionsDishContext from "../../../context/OptionDish";

const ItemOrder = ({ dish, addItems }) => {
  const { id, name, img, price } = dish;
  const { extraOrder1, extraOrder2, optionOrder } = useContext(OptionsDishContext);

  let [num, setNum] = useState(1);
  const totalPrice = price * num;
  let [noteItemOrder, setNoteItemOrder] = useState("");
  let options = null;

  useEffect(() => {
    addItems({
      extraOrder1: extraOrder1,
      extraOrder2: extraOrder2,
      idItemOrder: id,
      nameItemOrder: name,
      noteOrder: noteItemOrder,
      numItemOrder: num,
      optionOrder: optionOrder,
      priceItemOrder: price,
      priceTotalItemOrder: totalPrice,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num, noteItemOrder, extraOrder1, extraOrder2, optionOrder]);

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

  // useEffect(() => {
  //   console.log(optionOrder);
  // }, [optionOrder])

    if (name === "Hamburguesa clásica" || name === "Hamburguesa doble") {
      options = (
        // eslint-disable-next-line react-hooks/exhaustive-deps
        <>
          <p>Tipo: {optionOrder} </p>
          <p>Extra: {extraOrder1} {extraOrder2}</p>
        </>
      );
    } else {
      options = null;
    }

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
            {options}
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
