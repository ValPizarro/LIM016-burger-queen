import { useState } from "react";

const Hamburguesa = require("../../../../img/menu/menu2/burgerDouble_V1.png");

const ItemOrder = ({ dish }) => {

  const { name, price } = dish;

  let [num, setNum] = useState(1);
  const totalPrice = price * num;

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
        return (
          <div className="itemOrderBox">
            <div className="descriptionOrderItem">
              <div className="infoDish">
                <div className="photo">
                  <img src={Hamburguesa} alt="Food" />
                </div>
                <div className="info">
                  <p>{name}</p>
                  <p>$ {price}.00</p>
                </div>
              </div>
              <div className="noteOrder">
                <textarea placeholder="Indicaciones para el chef" />
              </div>
            </div>

            <div className="buttonsOrderBox">
              <div className="deleteOrder">
                <button className="fa-regular fa-trash-can trash"></button>
              </div>
              <div className="secondRowButtons">
                <p>$ {totalPrice}.00 </p>
              </div>
              <div className="firstRowButtons">
                <button
                  className="fa-regular fa-square-plus"
                  onClick={aumentar}
                ></button>
                <p>{num}</p>
                <button
                  className="fa-regular fa-square-minus"
                  onClick={disminuir}
                ></button>
              </div>
            </div>
          </div>
        );
};

export default ItemOrder;
