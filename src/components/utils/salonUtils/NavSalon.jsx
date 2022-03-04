import { NavLink } from "react-router-dom";

const LogoQuickly=require("../../../img/brand/quickly_logo.png");

function NavSalon(){
    return (
      <div className="navSalon">
        <div className="navSalonIcon">
          <img src={LogoQuickly} alt="" />
        </div>
        <nav>
          <NavLink to="/" className="navSalonIcon">
            <i class="fa-solid fa-house fa-3x fa-fw" />
          </NavLink>
          <NavLink to="/alert" className="navSalonIcon">
            <i class="fa-solid fa-bell fa-3x fa-fw" />
          </NavLink>
          <NavLink to="/config" className="navSalonIcon">
            <i class="fa-solid fa-gear fa-3x fa-fw" />
          </NavLink>
          <NavLink to="/out" className="navSalonIcon">
            <i class="fa-solid fa-right-from-bracket fa-3x fa-fw" />
          </NavLink>
        </nav>
      </div>
    );
}

export default NavSalon;
