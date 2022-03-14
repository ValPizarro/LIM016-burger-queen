const Hamburguesa = require("../../../../img/menu/menu2/burgerDouble_V1.png");

const ItemOrder = ({ dish }) => {
      const { name, price } = dish;


        return (
          <div className="itemOrderBox">
            <div className="descriptionOrderItem">
              <div className="infoDish">
                <div className="photo">
                  <img src={Hamburguesa} alt="Food" />
                </div>
                <div className="info">
                  <p>{name}</p>
                  <p> {price}</p>
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
                <p>$15.00 </p>
              </div>
              <div className="firstRowButtons">
                <button className="fa-regular fa-square-plus" ></button>
                <p>1</p>
                <button className="fa-regular fa-square-minus"></button>
              </div>
            </div>
          </div>
    );
};

export default ItemOrder;
