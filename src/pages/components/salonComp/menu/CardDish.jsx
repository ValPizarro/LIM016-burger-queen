import { useContext } from "react";
import { Options } from "./Options";
import { Extra } from "./Extra";

import OptionsDishContext from "../context/OptionDish";

export const CardDish = ({ menuDish, ShowItem }) => {

const { id, name, img, price } = menuDish;

const{ setExtraOrder1, setExtraOrder2, setOptionOrder } =
    useContext(OptionsDishContext);

  const getDish = (id, name) => {
    switch (name) {
      case "Hamburguesa clásica":
        Options(setOptionOrder).then(() =>
          Extra(setExtraOrder1, setExtraOrder2)
        );
        ShowItem(id);
        break;
      case "Hamburguesa doble":
        Options(setOptionOrder).then(() =>
          Extra(setExtraOrder1, setExtraOrder2)
        );
        ShowItem(id);

        break;
      default:
        ShowItem(id);
        break;
    }
  };

  return (
    <div
      className="carDish"
      data-id={id}
      key={id}
      onClick={() => getDish(id, name)}
    >
      <div className="photoDish">
        <img data-id={id} src={img} alt="Food" />
      </div>
      <div className="infoDish">
        <p data-id={id} className="textInfo1">
          {name}
        </p>
        <p data-id={id} className="textInfo2">
          $ {price}.00
        </p>
      </div>
    </div>
  );
};
