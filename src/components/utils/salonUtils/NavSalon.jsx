import { Link } from "react-router-dom";

function NavSalon(){
    return (
      <div className="NavSalon">
        <nav>
          <Link to="/">Home</Link>
          <p>alerta</p>
        </nav>
      </div>
    );
}

export default NavSalon;