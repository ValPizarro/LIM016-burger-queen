import CardAlertSalon from "./CardAlert";

const SectionShowAlert=({filterOrder})=>{

    return(
        <div className="sectionShowAlert">
            <div className="descriptionStateAlertSalon">
            Pedidos Listos
            </div>
            <div className="contentCardAlertSalon">
                {filterOrder.map((list)=>(
                    filterOrder?.length>=0?<CardAlertSalon
                    key={list.id}
                    list={list}
                    />:null
                ))}
            </div>

        </div>
    )
}
export default SectionShowAlert;