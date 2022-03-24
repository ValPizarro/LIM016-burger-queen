import { createContext, useState, useContext } from "react";


export const OptionsDishContext = createContext();
export const useOptionsContext = () => useContext(OptionsDishContext);

// const initialOption = {
//     extraOrder1: "",
//     extraOrder2: "",
//     optionOrder: "",
// };

export const OptionsDishProvider = ({ children }) => {

    const [extraOrder1, setExtraOrder1] = useState("-");

    const [extraOrder2, setExtraOrder2] = useState("-");

    const [optionOrder, setOptionOrder] = useState("-");

    // const [optionsDish, setOptionsDish] = useState({
    //   extraOrder1: extraOrder1,
    //   extraOrder2: extraOrder1,
    //   optionOrder: optionOrder,
    // });

    // const addOptionsDish = (newoptionDish) => {
    //     setOptionsDish(newoptionDish);
    // };

    // const dataOptions = {
    //     // optionsDish,
    //     // setOptionsDish,
    //     extraOrder1,
    //     setExtraOrder1,
    //     extraOrder2,
    //     setExtraOrder2,
    //     optionOrder,
    //     setOptionOrder,
    //     // addOptionsDish,
    // };

    return <OptionsDishContext.Provider value={

       {extraOrder1,
        setExtraOrder1,
        extraOrder2,
        setExtraOrder2,
        optionOrder,
        setOptionOrder
    }
    }>{children}</OptionsDishContext.Provider>
}


// export default OptionsDishContext;