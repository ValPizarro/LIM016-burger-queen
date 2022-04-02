import CardAlertSalon from "./CardAlert";
const SectionShowAlert=({filterOrder})=>{

    return(
        <div className="sectionShowAlert">
            {filterOrder.map((list)=>(
                filterOrder?.length>=0?<CardAlertSalon
                key={list.id}
                list={list}
                />:null
            ))}
        </div>
    )
}
export default SectionShowAlert;