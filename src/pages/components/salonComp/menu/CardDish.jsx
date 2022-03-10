// import {ItemOrderGeneral} from "../order/ItemOrder"

const Hamburguesa = require("../../../../img/menu/menu2/burgerDouble_V1.png");

const CardDish = (dish, price, id) => {

    const SelectCard = (e) => {
      // const IdDish = e.target.id;
    //   ItemOrderGeneral(IdDish);
    };

  return (
      <div
          className="carDish"
          id={dish.id}
          key={dish.id}
          onClick={SelectCard}
        >
          <div className="photoDish">
            <img src={Hamburguesa} alt="Food" />
          </div>
          <div className="infoDish">
            <p className="textInfo1">{dish.name}</p>
            <p className="textInfo2">$ {dish.price}.00</p>
          </div>
        </div>
  );
};
export default CardDish;


