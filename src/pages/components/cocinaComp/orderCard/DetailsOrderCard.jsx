import { useState } from "react";

export const DetailsOrderCard = ({ details, orderID }) => {
  console.log(details)
  const [stateITem, setStateItem] = useState(false)

  const {
    extraOrder1,
    extraOrder2,
    nameItemOrder,
    noteOrder,
    numItemOrder,
    optionOrder,
    // stateItem,
  } = details;
  const handleChange = (e) => {
    setStateItem(e.target.checked);

  };

  return (
    <div className="DetailsOrderCard">
      <input
        type="checkbox"
        checked={stateITem}
        onChange={handleChange}
      />
      <p className="num" >{numItemOrder}</p>
      <div>
        <h2 onClick={handleChange}>{nameItemOrder}</h2>
        <p>Detalle:{optionOrder}</p>
        <p>
          {extraOrder1}
          {extraOrder2}
        </p>
        <p>Nota: {noteOrder}</p>
      </div>
    </div>
  );
};