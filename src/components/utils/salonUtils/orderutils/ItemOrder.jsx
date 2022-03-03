// const Hamburguesa = require ("../../../../img/menu/menu2/burgerDouble_V1.png")
/* <img src={Hamburguesa} alt="Food" /> */

const ItemOrderGeneral = () => {
    return (
      <div className="itemOrderBox">
        <div className="firstDescriptionOrderBox">
          <div className="item1">
            <div>photo</div>
            <div>
              <p>Hamburguesa doble</p>
              <p> $15.00 </p>
            </div>
          </div>
          <div className="item2">
            <textarea placeholder="Indicaciones para el chef" />
          </div>
        </div>

        <div className="secondDescriptionOrderBox">
          <div className ="item1" >
            <button>+</button>
            <p >1</p>
            <button >-</button>
          </div>
          <div className ="item2" >
            <p >$15.0 </p>
            <button>Borrar</button>
          </div>
        </div>
      </div>
    );
}

export default ItemOrderGeneral;
