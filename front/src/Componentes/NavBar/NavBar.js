import React, { useState } from "react";
import stl from "../NavBar/NavBar.module.css";
import DayNightToggle from 'react-day-and-night-toggle';
import "./darkmode.css";
import "./dropdown.css";
import { Link } from "react-router-dom";

export default function NavBar() {

    const [darkTheme, setDarkTheme] = useState(false);

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
  };

    return (

        <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
        <div className={stl.navbar}>
        </div>
            
        <div className={stl.logo2}></div>
            <Link to = "/homepage">
             <p className={stl.logo}>Adopt.Me</p>
             </Link>
             

        <div className={stl.algomas}>
             <h4>Blog</h4>
  
             <div className="dropdown">
      <div className="info" onClick={handleOpen}>Info</div>
      {open ? (
        <div className="menu">
          <div className="menu-item">
            <Link to = "/givepet">
            <div className="drop">Donar Mascota</div>
            </Link>
          </div>
          <div className="menu-item">
            <Link to = "/buscarmascota">
            <div className="drop">Mascota Perdida</div>
            </Link>
          </div>
          <div className="menu-item">
          <Link to = "/reportarmaltrato">
            <div className="drop">Denunciar Maltrato</div>
            </Link>
          </div>
          <div className="menu-item">
          <Link to = "/tepuedeinteresar">
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
      

        <div className={stl.login}>
          <Link to = "/sigup">      
             <button className={stl.buttons}>Registrarse</button>
             </Link>
            <button className={stl.buttons}>Log In</button>
        </div>


     </div>
     

    )
}
