// import {ItemOrderGeneral} from "../order/ItemOrder"

const Hamburguesa = require("../../../../img/menu/menu2/burgerDouble_V1.png");

export const CardDish = ({ MenuDishes }) => {
  const SelectCard = (e) => {
  /*   const IdDish = e.target.id;
      ItemOrderGeneral(IdDish); */
  };

  return (
    <div className="dishGeneral">
      {MenuDishes.map((menuDish) => {
        const { id, name, price } = menuDish;

        return (
          <div className="carDish" id={id} key={id} onClick={SelectCard}>

            <div id={id} className="photoDish">
              <img id={id} src={Hamburguesa} alt="Food" />
            </div>
            <div id={id} className="infoDish">
              <p id={id} className="textInfo1">{name}</p>
              <p id={id} className="textInfo2">$ {price}.00</p>
            </div>
          </div>
        );
      })}

    </div>
  );
};
