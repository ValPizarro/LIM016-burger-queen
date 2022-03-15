import ItemOrder from "./ItemOrder";

const TotalItems = ({ listDishes }) => {

  // ¿Crear el array de platos aquí?

    const addItems = async (itemsOrder) => {
        const arrayItemsOrder = itemsOrder;
        console.log(arrayItemsOrder);
    };

  return (
    <div className="itemsTotalOrder">
      {listDishes.map((dish) => (
          <ItemOrder dish={dish} addItems={addItems}/>
      ))}
    </div>
  );
};

export default TotalItems;
