import Swal from "sweetalert2";

export const Options = async (setOptionOrder) => {
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
      }
    },
  });

  return setOptionOrder(tipo);
};