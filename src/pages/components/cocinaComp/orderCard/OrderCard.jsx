const OrderCard=()=>{
    return(
        <div className="ContainerOrderCard">
            <header className="headerDescriptionOrder">
                <button>En proceso</button>
                <p>Orden #23469</p>
            </header>
            <hr/>
            <div className="flexOrderDescription">
                <div className="gridTitleOrder">
                    <p className="unidad">Unidad</p>
                    <p className="description">Description</p>
                </div>

                <div className="gridOrder">
                    <input type="checkbox"/>
                    <p className="num">01</p>
                    <div>
                        <h2>Haburguesa doble</h2>
                        <p>Detalle:</p>
                        <p>Carne</p>
                        <p>Huevo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderCard;