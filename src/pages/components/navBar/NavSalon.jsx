import { NavLink } from "react-router-dom";

const LogoQuickly=require("../../../img/brand/quickly_logo.png");

function NavSalon(){
    return (
      <>
        <nav className="navSalon">
          <div className="logoNav">
            <NavLink to="/">
              <img src={LogoQuickly} alt="Quickly" />
            </NavLink>
          </div>
          <div className="optionsNav">
            <NavLink to="/">
              <i class="fa-solid fa-pen-to-square"></i>
            </NavLink>
            <NavLink to="/salon/alert">
              <i className="fa-solid fa-bell" />
            </NavLink>
            <NavLink to="/config">
              <i className="fa-solid fa-clock-rotate-left" />
            </NavLink>
            {/* <NavLink to="/out">
              <i className="fa-solid fa-right-from-bracket" />
            </NavLink> */}
          </div>
        </nav>
      </>
    );
}

export default NavSalon;
