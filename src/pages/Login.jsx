const quicklyWhite = require("../img/brand/quickly_white.png");

function Login() {

    return (
      <div className="ContentLogin">
        <img src={quicklyWhite} alt=""/>
        <section className="SectionBtnLogin">
          <a href="/salon" className="BoxButton">
            <button className="BtnLogin">
              Salón
            </button>

          </a>
          <a href="/cocina" className="BoxButton">
            <button className="BtnLogin" >Cocina</button>
          </a>
        </section>
        <section className="capa"></section>
      </div>
    );
}

export default Login;
