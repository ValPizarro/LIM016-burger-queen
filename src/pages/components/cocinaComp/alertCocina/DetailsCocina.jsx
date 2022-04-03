const DetailsCocina=()=>{
    return(
        <div className="detailsCocina">
            <div className="headerDescriptionOrder">
                <div>
                    Estado
                </div>

                <p>Numero de orden: #1000</p>
                <p> Tiempo: 0:10:00 </p>
            </div>
            <hr />
            <div className="flexOrderDescription">
                <div className="gridTitleOrder">
                <p className="unidad">Unidad</p>
                <p className="description">Description</p>
                </div>
                <div className="GeneralDeilsOrderCard">

                </div>
                <div className="contentEntregarPedido">
                <button  className="entregarPedido">
                    Entregar pedido
                </button>
                </div>
            </div>
        </div>
    )
}
export default DetailsCocina;