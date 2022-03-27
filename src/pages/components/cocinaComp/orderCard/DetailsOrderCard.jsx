export const DetailsOrderCard = ({ details }) => {
  console.log(details.nameItemOrder);
  const {
    extraOrder1,
    extraOrder2,
    nameItemOrder,
    noteOrder,
    numItemOrder,
    optionOrder,
    // stateItem,
  } = details;
  return (
    <div className="DetailsOrderCard">
      <input type="checkbox" />
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