import { Options } from "./Options";
import { Extra } from "./Extra";

export const OptionsDish = ({
  extraOrder1,
  setExtraOrder1,
  extraOrder2,
  setExtraOrder2,
  optionOrder,
  setOptionOrder,
}) => {


    Options(setOptionOrder);
    //     .then(() => {
    //     Extra(setExtraOrder1, setExtraOrder2);
    // });



  return (
    <>
      <p>Tipo: {optionOrder} </p>
      <p>
        Extra:{extraOrder1} {extraOrder2}
      </p>
    </>
  );
};