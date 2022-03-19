import { createContext, useState } from "react"

const OptionsDishContext = createContext();

const initialOption = {
    extraOrder1: "",
    extraOrder2: "",
    optionOrder: "",
};

const OptionsDishProvider = ({ children }) => {

    const [optionsDish, setOptionsDish] = useState(initialOption);

    const [extraOrder1, setExtraOrder1] = useState("");

    const [extraOrder2, setExtraOrder2] = useState("");

    const [optionOrder, setOptionOrder] = useState("");

    const addOptionsDish = (newoptionDish) => {
        setOptionsDish(newoptionDish);
    };

    const dataOptions = {
        optionsDish,
        extraOrder1,
        setExtraOrder1,
        extraOrder2,
        setExtraOrder2,
        optionOrder,
        setOptionOrder,
        addOptionsDish,
    };

    return <OptionsDishContext.Provider value={dataOptions}>{children}</OptionsDishContext.Provider>
}

export { OptionsDishProvider };
export default OptionsDishContext;