import { OptionsDishProvider } from "../context/OptionDish";

import { CardDish } from "./CardDish";


export const AllCardsDishes = ({ MenuDishes, ShowItem }) => {
  return (
    <div className="dishGeneral">
      {MenuDishes.map((menuDish) => (
        <OptionsDishProvider key={menuDish.id} >
          <CardDish menuDish={menuDish} ShowItem={ShowItem} />
        </OptionsDishProvider>
      ))}
    </div>
  );
};
