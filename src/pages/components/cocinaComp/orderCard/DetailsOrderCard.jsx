export const DetailsOrderCard = ({ details }) => {
  console.log(details.nameItemOrder);
  return (
    <div className="DetailsOrderCard">
      <input type="checkbox" />
      <p className="num">01</p>
      <div>
        <h2>Haburguesa doble</h2>
        <p>Detalle:</p>
        <p>Carne</p>
        <p>Huevo</p>
      </div>
    </div>
  );
};