const BtnsHistory=({setCurrentStateHistory})=>{
    const HandleStateHistory = (e) => {
        const currentState = e.target.value;
        return setCurrentStateHistory(currentState);
      };

return(

    <div className="btnsHistory">
        <div className="btnTotalOrders">
            <button className="btnTotalOrders"
            onClickCapture={HandleStateHistory}
            >Todos</button>
        </div>
        <div className="btnGenerados">
            <button className="btnGenerados"
            value={"generado"}
            onClickCapture={HandleStateHistory}
            >Generados</button>
        </div>
        <div className="EnProcesoChef">
            <button className=""
            value={"proceso"}
            onClickCapture={HandleStateHistory}
            >En proceso</button>
        </div>
        <div className="btnEntregadosMesero">
            <button className=""
            onClickCapture={HandleStateHistory}
            >Entregado</button>
        </div>
    </div>

)
}
export default BtnsHistory;