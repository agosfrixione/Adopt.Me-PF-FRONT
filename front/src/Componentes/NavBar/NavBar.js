import React, { useState } from "react";
import stl from "../NavBar/NavBar.module.css";
import DayNightToggle from "react-day-and-night-toggle";
import "./darkmode.css";
import "./dropdown.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavBar() {
  const [darkTheme, setDarkTheme] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const { logout } = useAuth0();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOpen2 = () => {
    setOpen2(!open2);
  };

  return (
    <div className={darkTheme ? "dark-theme" : "light-theme"}>
      <div className={stl.navbar}></div>

      <div className={stl.logo2}></div>
      <Link to="/homepage">
        <p className={stl.logo}>Adopt.Me</p>
      </Link>

      <div className={stl.algomas}>
        <h4>Blog</h4>

        <div className="dropdown">
          <div className="info" onClick={handleOpen}>
            Info
          </div>
          {open ? (
            <div className="menu">
              <div className="menu-item">
                <Link to="/givepet">
                  <div className="drop">Dar en Adopcion</div>
                </Link>
              </div>
              <div className="menu-item">
                <Link to="/buscarmascota">
                  <div className="drop">Mascota Perdida</div>
                </Link>
              </div>
              <div className="menu-item">
                <Link to="/reportarmaltrato">
                  <div className="drop">Denunciar Maltrato</div>
                </Link>
              </div>
              <div className="menu-item">
                <Link to="/tepuedeinteresar">
                  <div className="drop">Otras Cosas</div>
                </Link>
              </div>
            </div>
          ) : null}
          {open ? <div></div> : <div></div>}
        </div>
        
        <DayNightToggle
          onChange={() => setDarkTheme(!darkTheme)}
          checked={darkTheme}
        />
      </div>

      {!isAuthenticated && (
        <div className={stl.login}>
          <Link to="/usuarios/signup">
            <button className={stl.buttons}>Registrarse</button>
          </Link>
          <Link to="/prueba">
            <button className={stl.buttons}>Ingresar</button>
          </Link>
        </div>
      )}

      {isAuthenticated && (
        <div className={stl.dropdown}>
          <div className={stl.info} onClick={handleOpen2}>
            Perfil
          </div>
          {open2 ? (
            <div className="menu2">
              <div className="menu-item2">
                <Link to="/perfil">
                  <div className="drop2">Mi perfil</div>
                </Link>
              </div>
              <div className="menu-item">
                <button onClick={() => logout()}>Cerrar sesión</button>
              </div>
            </div>
          ) : null}
          {open2 ? <div></div> : <div></div>}
        </div>
      )}
    </div>
  );
}
