import TotalItems from "./TotalItemsOrder";

export const ShowOrder = ({ listDishes }) => {
  const numOrder = 345;
  const totalOrder = 45.001;
  return (
    <>
      <form className="formOrder sectionC">
        <div className="headerOrder">
          <button className="btnSubmitOrder" type="submit">
            Enviar pedido
          </button>
          <div className="infoOrder">
            <input
              name="nameOrder"
              placeholder="Nombre del cliente"
              type="text"
              className="nameOrder"
            />
            <p>Orden N°: {numOrder}</p>
          </div>
        </div>
        <TotalItems listDishes={listDishes} />
        <div className="priceOrder">
          <p className="item1">Total: </p>
          <p className="item2">$ {totalOrder}</p>
        </div>
      </form>
    </>
  );
};