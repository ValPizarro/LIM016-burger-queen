// import { doc, updateDoc } from "firebase/firestore";
// import { db } from "../../../../firebase/config";
import { useState } from "react";

export const DetailsOrderCard = ({ details, orderID, index }) => {

  console.log(orderID);
  console.log(index);
  const {
    extraOrder1,
    extraOrder2,
    // idItemOrder,
    nameItemOrder,
    noteOrder,
    numItemOrder,
    optionOrder,
    // stateItem,
  } = details;

  const [stateItem, setStateItem] = useState(false)

  const handleChange = async (e) => {
    const estado = e.target.checked;
    console.log(estado);

    setStateItem(estado);
  };

  // console.log(stateItem);

  return (
    <div className="DetailsOrderCard">
      <input type="checkbox" checked={stateItem} onChange={handleChange} />
      <p className="num">{numItemOrder}</p>

      <div>
        <h2>{nameItemOrder}</h2>
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
