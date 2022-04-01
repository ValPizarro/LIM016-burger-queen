import { CardOrderGenerada } from "./CardOrderGenerada";

export const AllOrderGenerados = ({ ordersGeneradas }) => {
  return (
    <div className="cardsChefGeneral">
      {ordersGeneradas.map((orderGenerada) =>
          orderGenerada.itemsOrder?.length >= 0 ? (
          <CardOrderGenerada
            orderGenerada={orderGenerada}
            // orderByID={orderByID}
            key={orderGenerada.id}
          />
        ) : null
      )}
    </div>
  );
};
