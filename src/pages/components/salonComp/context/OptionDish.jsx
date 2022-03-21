import { createContext, useState } from "react"

const OptionsDishContext = createContext();

// const initialOption = {
//     extraOrder1: "",
//     extraOrder2: "",
//     optionOrder: "",
// };

const OptionsDishProvider = ({ children }) => {

    const [extraOrder1, setExtraOrder1] = useState("-");

    const [extraOrder2, setExtraOrder2] = useState("-");

    const [optionOrder, setOptionOrder] = useState("");

    const [optionsDish, setOptionsDish] = useState({
      extraOrder1: extraOrder1,
      extraOrder2: extraOrder1,
      optionOrder: optionOrder,
    });

    // const addOptionsDish = (newoptionDish) => {
    //     setOptionsDish(newoptionDish);
    // };
    const dataOptions = {
        optionsDish,
        setOptionsDish,
        extraOrder1,
        setExtraOrder1,
        extraOrder2,
        setExtraOrder2,
        optionOrder,
        setOptionOrder,
        // addOptionsDish,
    };

    return <OptionsDishContext.Provider value={dataOptions}>{children}</OptionsDishContext.Provider>
}

export { OptionsDishProvider };
export default OptionsDishContext;