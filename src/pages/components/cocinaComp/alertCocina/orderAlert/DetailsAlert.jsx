export const DetailsAlert = ({details}) => {

     const {
       extraOrder1,
       extraOrder2,
       nameItemOrder,
       noteOrder,
       numItemOrder,
       optionOrder,
     } = details;

    return (
        <div className="DetailsOrderCard">
           <p className="num">{numItemOrder}</p>
                <div>
                <h3>{nameItemOrder}</h3>
                <p>Detalle:{optionOrder}</p>
                <p>
                    {extraOrder1}
                    {extraOrder2}
                </p>
                <p>Nota: {noteOrder}</p>
            </div>
       </div>
     )
}