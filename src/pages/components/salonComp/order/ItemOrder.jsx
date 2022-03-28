import { useEffect, useState } from "react";
import { useOptionsContext } from "../../../context/OptionDish";

const ItemOrder = ({ dish, addItems, deleteItem }) => {
  const { id, name, img, price } = dish;

  const { optionOrder, extraOrder1, extraOrder2 } = useOptionsContext();

  // useEffect(() => {

  //   console.log(optionOrder);
  //   console.log(extraOrder1);
  //   console.log(extraOrder2);
  // }, [optionOrder, extraOrder1, extraOrder2]);

  let options = null; // volverlo componente

  const [item, setItem] = useState({
    extraOrder1: extraOrder1,
    extraOrder2: extraOrder2,
    idItemOrder: id,
    nameItemOrder: name,
    noteOrder: "Este es el Item",
    numItemOrder: 1,
    optionOrder: optionOrder,
    priceItemOrder: price,
    priceTotalItemOrder: price,
    stateItem: false,
  });

  const handleItem = (item, valor) => {
    if (typeof valor === "number") {
      const currentTotalPrice = valor * price;

      setItem({
        ...item,
        numItemOrder: valor,
        priceTotalItemOrder: currentTotalPrice,
      });
    } else {
      setItem({
        ...item,
        noteOrder: valor,
      });
    }
  };

  useEffect(() => {
    addItems(item);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, item.numItemOrder, item.noteOrder]);

  const aumentar = (e) => {
    e.preventDefault();
    // investigar ++
    const currentAccount = ++item["numItemOrder"];

    handleItem(item, currentAccount);
  };

  const disminuir = (e) => {
    e.preventDefault();
    if (item["numItemOrder"] === 1) {
      handleItem(item["numItemOrder"]);
    } else {
      const currentAccount = --item["numItemOrder"];

      handleItem(item, currentAccount);
    }
  };

  const handleNote = (e) => {
    const currentNote = e.target.value;

    handleItem(item, currentNote);
  };

  if (name === "Hamburguesa clásica" || name === "Hamburguesa doble") {
    options = (
      // eslint-disable-next-line react-hooks/exhaustive-deps
      <>
        <p>Tipo: {"-"} </p>
        <p>
          Extra: {"-"} {"-"}
        </p>
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
            <p>S/. {price}.00</p>
            {options}
          </div>
        </div>
        <div className="noteOrder">
          <textarea
            placeholder="Indicaciones para el chef"
            onChange={handleNote}
          />
        </div>
      </div>
      <div className="buttonsOrderBox">
        <div className="deleteOrder">
          <button
            className="fa-regular fa-trash-can trash"
            onClick={deleteItem(id)}
          />
        </div>
        <div className="secondRowButtons">
          <p>S/. {item["priceTotalItemOrder"]}.00 </p>
        </div>
        <div className="firstRowButtons">
          <button className="fa-regular fa-square-minus" onClick={disminuir} />
          <p>{item["numItemOrder"]}</p>
          <button className="fa-regular fa-square-plus" onClick={aumentar} />
        </div>
      </div>
    </div>
  );
};

export default ItemOrder;
