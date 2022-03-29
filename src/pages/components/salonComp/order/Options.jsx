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

  /* inputOptions can be an object or Promise */
  /* inputOptions can be an object or Promise */

    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          "#ff0000": "Red",
          "#00ff00": "Green",
          "#0000ff": "Blue",
        });
      }, 1000);
    });

    const { value: color } = await Swal.fire({
      title: "Select color",
      input: "radio",
      inputOptions: inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return "You need to choose something!";
        }
      },
    }).then(() => {
      console.log(color);
    });


    return
};

