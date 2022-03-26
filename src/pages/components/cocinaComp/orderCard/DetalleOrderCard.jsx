export const DetalleOrderCard = ({ detalleOrder }) => {
console.log(detalleOrder);
  return (
    <div className="DetalleOrderCard">
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