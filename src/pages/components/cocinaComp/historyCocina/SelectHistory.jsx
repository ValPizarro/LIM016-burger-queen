export const SelectHistory = ({ SetCurrentState }) => {
  const HandleState = (e) => {
    const currentState = e.target.value;

    return SetCurrentState(currentState);
  };

  return (
    <div className="selectHistory">
      <button
        value={"all"}
        onClick={HandleState}
      >
        Todos
      </button>
      <button
        value={"generado"}
        onClick={HandleState}
      >
        Generado
      </button>
      <button
        value={"proceso"}
        onClick={HandleState}
      >
        En proceso
      </button>
      <button
        value={"completado"}
        onClick={HandleState}
      >
        Completados
      </button>
    </div>
  );
};
