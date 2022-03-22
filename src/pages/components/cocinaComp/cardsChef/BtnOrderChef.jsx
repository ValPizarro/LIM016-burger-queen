const BtnOrderChef = ({ SetCurrentState }) => {

  const HandleState = (e) => {
    const currentState = e.target.value;

    return SetCurrentState(currentState);
  };

  return (
    <div className="gridBtnChef">
      <button
        className="pendiente SelectChef"
        value={"generado"}
        onClick={HandleState}
      >
        Pendiente
      </button>
      <button
        className="En proceso SelectChef"
        value={"proceso"}
        onClick={HandleState}
      >
        En proceso
      </button>
    </div>
  );
};
export default BtnOrderChef;
