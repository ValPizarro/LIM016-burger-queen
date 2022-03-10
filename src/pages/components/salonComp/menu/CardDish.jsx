// import {ItemOrderGeneral} from "../order/ItemOrder"

const Hamburguesa = require("../../../../img/menu/menu2/burgerDouble_V1.png");

export const CardDish = ({ MenuDishes }) => {

  const SelectCard = (e) => {
    const IdDish = e.target.dataset.id;
    console.log(IdDish);
  };

  return (
    <div className="dishGeneral">
      {MenuDishes.map((menuDish) => {
        const { id, name, price } = menuDish;

        return (
          <div className="carDish" data-id={id} key={id} onClick={SelectCard}>
            <div className="photoDish">
              <img data-id={id} src={Hamburguesa} alt="Food" />
            </div>
            <div className="infoDish">
              <p data-id={id} className="textInfo1">
                {name}
              </p>
              <p data-id={id} className="textInfo2">
                $ {price}.00
              </p>
            </div>
          </div>
        );
      })}

    </div>
  );
};
