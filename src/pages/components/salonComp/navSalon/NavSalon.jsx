import { NavLink } from "react-router-dom";

const LogoQuickly=require("../../../../img/brand/quickly_logo.png");

function NavSalon(){
    return (
      <>
        <nav className="navSalon">
            <NavLink to="/">
              <img src={LogoQuickly} alt="Quickly" />
            </NavLink>
            <NavLink to="/salon">
              <i className="fa-solid fa-pen-to-square"/>
            </NavLink>
            <NavLink to="/salon/alert">
              <i className="fa-solid fa-bell" />
            </NavLink>
            <NavLink to="/salon/history">
              <i className="fa-solid fa-clock-rotate-left" />
            </NavLink>
  
        </nav>
      </>
    );
}

export default NavSalon;
