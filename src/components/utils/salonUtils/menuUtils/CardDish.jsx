// const Hamburguesa = require("../../../../img/menu/menu2/burgerDouble_V1.png");

const CardDish = () => {
//  const q = query (collection( db, "menu"), where(""))
    const nameDish = "Hamburguesa Doble";
    const priceDish = 15;

    return (
      <div className="carDish">
            <div className="photoDish">
                <p>photo</p>
                {/* <img src={Hamburguesa} alt="Food" /> */}
            </div>
            <div className="infoDish">
                <p className="item1">{nameDish}</p>
                <p className="item2">$ {priceDish}.00</p>
            </div>
      </div>
    );
}
export default CardDish