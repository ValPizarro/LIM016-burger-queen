import { Link } from "react-router-dom";
const LogoQuickly=require("../../../img/brand/quickly_logo.png");

function NavSalon(){
    return (
      <div className="NavSalon">
        <div className="NavSalonIcon">

          <img src={LogoQuickly} alt="" />
        </div>
        <div className="NavSalonIcon">
          <Link to="/">

     Home
          </Link>
        </div>
        <div className="NavSalonIcon">
        </div>
        <div className="NavSalonIcon">
        </div>
        <div className="NavSalonIcon">
        </div>
      </div>
    );
}

export default NavSalon;
