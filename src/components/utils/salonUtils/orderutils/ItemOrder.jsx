// const Hamburguesa = require ("../../../../img/menu/menu2/burgerDouble_V1.png")
/* <img src={Hamburguesa} alt="Food" /> */

const ItemOrderGeneral = () => {
    return (
      <div className="itemOrderBox">
        <div className="firstDescriptionOrderBox">
          <div className="descriptionOrder">
            <div>photo</div>
            <div>
              <p>Hamburguesa doble</p>
              <p> $15.00 </p>
            </div>
          </div>
          <div classname="noteOrder">
            <textarea placeholder="Indicaciones para el chef" />
          </div>
        </div>

        <div className="secondDescriptionOrderBox">
          <button className="item1">+</button>
          <p className="item2">1</p>
          <button className="item3">-</button>
          <p className="item4">$15.0 </p>
          <button className="item5">Borrar</button>
        </div>
      </div>
    );
}

export default ItemOrderGeneral;
