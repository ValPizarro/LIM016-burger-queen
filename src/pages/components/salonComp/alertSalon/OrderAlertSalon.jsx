const OrderAlertSalon =({details})=>{
    console.log(details.nameItemOrder)
    return(
        <p className="DetailsAlertSalon"> {details.nameItemOrder}</p>
    )
}
export default OrderAlertSalon;