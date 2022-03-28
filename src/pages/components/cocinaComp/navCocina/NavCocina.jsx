import { NavLink } from "react-router-dom";

const LogoQuickly = require("../../../../img/brand/quickly_logo.png");

function NavSalon() {
  return (
    <>
      <nav className="navSalon">
        <div className="logoNav">
          <NavLink to="/">
            <img src={LogoQuickly} alt="Quickly" />
          </NavLink>
        </div>
        <div className="optionsNav">
          <NavLink to="/cocina">
            <i className="fa-solid fa-utensils"/>
          </NavLink>
          <NavLink to="/cocina/alert">
            <i className="fa-solid fa-bell" />
          </NavLink>
          <NavLink to="/cocina/history">
            <i className="fa-solid fa-clock-rotate-left" />
          </NavLink>

        </div>
      </nav>
    </>
  );
}

export default NavSalon;
