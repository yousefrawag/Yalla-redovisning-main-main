import { NavLink } from "react-router-dom";
import "./navabar.scss";
const Navbar = () => {
  return (
    <div className="navabr">
      <div className="container">
        <nav>
          <div className="pges_router">
            <h2>Yalla redovisning</h2>

            <div className="links">
              <NavLink className="nava-link" to="/">
                start
              </NavLink>

              <NavLink className="nava-link" to="/TJÄNSTER">
                TJÄNSTER
              </NavLink>

              <NavLink className="nava-link" to="/Priser">
                Priser
              </NavLink>

              <NavLink className="nava-link" to="/Kontakt">
                Kontakt
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
