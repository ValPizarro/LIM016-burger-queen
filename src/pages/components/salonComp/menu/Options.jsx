import Swal from "sweetalert2";

export const Options = async ({ setOptionOrder }) => {
  // const {
  //   extraOrder1,
  //   setExtraOrder1,
  //   extraOrder2,
  //   setExtraOrder2,
  //   optionOrder,
  //   setOptionOrder,
  // } = useOptionsContext();

  // const handleOptions = () => {};

  const inputOptions = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        Carne: "Carne",
        Pollo: "Pollo",
      });
    }, 1000);
  });

  const { value: tipo } = await Swal.fire({
    title: "Hamburguesa de:",
    input: "radio",
    inputOptions: inputOptions,
    inputValidator: (value) => {
      if (!value) {
        return "Debes seleccionar una opción";
      } else {
        setOptionOrder(value)
      }
    },
  });

  //  console.log(tipo);

  return ;
};


