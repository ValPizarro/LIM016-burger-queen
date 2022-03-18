import NavSalon from "../pages/components/salonComp/nav/NavSalon";

function Cocina({idOrder}) {

  console.log(idOrder);

  return (
    <div>
      <NavSalon />
      <div>
        <h1> Esta es la vista de la cocina</h1>
      </div>
    </div>
  );
}

export default Cocina;
