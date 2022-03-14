import ItemOrder from "./ItemOrder";

const TotalItems = ({ listDishes }) => {
    return (
        <div className="itemsTotalOrder">
            {listDishes.map((dish) =>(
                <ItemOrder dish={dish} />
            ))}
        </div>
    )
};

export default TotalItems;
