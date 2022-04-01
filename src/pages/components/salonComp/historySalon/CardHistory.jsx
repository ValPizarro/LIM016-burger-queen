const CardHistory=({list})=>{
    const listItemOrder=list.itemsOrder;
    return(
            <div className="backgroundCardHistory">
                <div className="cardHistory">
                    <p>{list.nameOrder}</p>
                    <p>{list.numOrder}</p>
                    {listItemOrder.map((item ) => {
                       return <p>{item.nameItemOrder}</p>
                    })}
                    <p>{list.totalPriceOrder}</p>
                </div>
            </div>

    )
}
export default CardHistory;