const quicklyWhite=require("../img/brand/quickly_white.png");
function Login() {

  const nameBtn={
      welcomeBtnSalon:"Salon",
      welcomeBtnCocina:"Cocina",
  }
  const saludoClick = () => console.log("has hecho click!");

/*   const user = true; */
    return (
      <div className="ContentLogin">
        <img src={quicklyWhite} alt=""/>
        <section className="SectionBtnLogin">
          <a href="/salon" className="BoxButton">
            <button className="BtnLogin" onClick={saludoClick}>
              Salón
            </button>

          </a>
          <a href="/cocina" className="BoxButton">
            <button className="BtnLogin" onClick={saludoClick}>{nameBtn.welcomeBtnCocina}</button>
          </a>
        </section>
        <section className="capa"></section>
      </div>
    );
}

export default Login;
