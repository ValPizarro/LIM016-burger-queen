import { NavLink } from "react-router-dom";

const LogoQuickly=require("../../../img/brand/quickly_logo.png");

function NavSalon(){
    return (
      <div className="navSalon">
        <div className="logoNav">
          <img src={LogoQuickly} alt="Quickly" />
        </div>
        <div className="optionsNav">
          <nav>
            <NavLink to="/" className="navSalonIcon">
              <i className="fa-solid fa-house fa-3x fa-fw" />
            </NavLink>
            <NavLink to="/alert" className="navSalonIcon">
              <i className="fa-solid fa-bell fa-3x fa-fw" />
            </NavLink>
            <NavLink to="/config" className="navSalonIcon">
              <i className="fa-solid fa-clock-rotate-left fa-3x fa-fw" />
            </NavLink>
            <NavLink to="/out" className="navSalonIcon">
              <i className="fa-solid fa-right-from-bracket fa-3x fa-fw" />
            </NavLink>
          </nav>
        </div>
      </div>
    );
}

export default NavSalon;
