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
            
            <Link to = "/homepage">
             <p className={stl.logo}>Adopt.Me</p>
             </Link>
             

        <div className={stl.algomas}>
             <h4>Blog</h4>
  
             <div className="dropdown">
      <p onClick={handleOpen}>Info</p>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <Link to = "/givepet">
            <p className="drop">Donar Mascota</p>
            </Link>
          </li>
          <li className="menu-item">
            <Link to = "/buscarmascota">
            <p className="drop">Mascota Perdida</p>
            </Link>
          </li>
          <li className="menu-item">
          <Link to = "/reportarmaltrato">
            <p className="drop">Denunciar Maltrato</p>
            </Link>
          </li>
          <li className="menu-item">
          <Link to = "/tepuedeinteresar">
            <p className="drop">Otras Cosas</p>
            </Link>
          </li>
          
        </ul>
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
