const Hamburguesa = require ("../../../../img/menu/menu2/burgerDouble_V1.png")
// const Trash  = require("../../../../img/icon/trash.png");
// const Less = require("../../../../img/icon/less.png");
// const More = require("../../../../img/icon/more.png");


const ItemOrderGeneral = () => {
    return (
      <div className="itemOrderBox">
        <div className="descriptionOrderItem">
          <div className="infoDish">
            <div className="photo">
              <img src={Hamburguesa} alt="Food" />
            </div>
            <div className="info">
              <p>Hamburguesa doble</p>
              <p> $15.00 </p>
            </div>
          </div>
          <div className="noteOrder">
            <textarea placeholder="Indicaciones para el chef" />
          </div>
        </div>

        <div className="buttonsOrderBox">
          <div className="firstRowButtons">
            {/* <i class="fa-regular fa-pen-to-square"></i> */}
            <button className="fa-regular fa-square-plus"></button>
            <p>1</p>
            <button className="fa-regular fa-square-minus"></button>
          </div>
          <div className="secondRowButtons">
            <p>$15.00 </p>

            <button className="fa-regular fa-trash-can"></button>
          </div>
        </div>
      </div>
    );
}

export default ItemOrderGeneral;
