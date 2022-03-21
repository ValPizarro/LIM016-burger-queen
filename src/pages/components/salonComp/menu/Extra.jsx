import Swal from "sweetalert2";

export const Extra = (setExtraOrder1, setExtraOrder2) => {
  Swal.fire({
    title: "Extras",
    html:
      '<h3>Huevo <input type="checkbox" id="huevo"  /></h3>' +
      '<h3>Queso <input type="checkbox" id="queso"  /></h3>',
    confirmButtonText: "confirmar",
    preConfirm: () => {
      var huevo = Swal.getPopup().querySelector("#huevo").checked;
      var queso = Swal.getPopup().querySelector("#queso").checked;

      return { huevo: huevo, queso: queso };
    },
  }).then((result) => {
    let extra1 = result.value.huevo === true ? "huevo" : "";
    let extra2 = result.value.queso === true ? "queso" : "";

    setExtraOrder1(extra1);
    setExtraOrder2(extra2);
  });
};
