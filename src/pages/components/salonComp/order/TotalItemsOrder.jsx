import ItemOrder from "./ItemOrder";

const TotalItems = ({ listDishes }) => {

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
