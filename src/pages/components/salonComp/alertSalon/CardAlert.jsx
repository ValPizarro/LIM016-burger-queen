import OrderAlertSalon from "./OrderAlertSalon";

 const CardAlertSalon=({list})=>{
    const listAlert=list.itemsOrder;
    return(
            <div className="backgroundCardAlertSalon">
                <div className="cardAlertSalon">
                    <div className="headerOrderSalon">
                        <p><span>nº de mesa: </span>{list.numOrder}</p>
                        <p>{list.nameOrder}</p>
                    </div>
                    <div className="orderAlertSalon">
                        {listAlert.map((details)=>(
                            listAlert?.length>=0?<OrderAlertSalon
                            details={details}
                            key={details.idItemOrder}
                            />:null
                        ))}
                    </div>
                <p className="TotalAlertSalon"><span>Total:</span> S/ {list.totalPriceOrder}</p>
                </div>

            </div>

    )
}
export default CardAlertSalon;