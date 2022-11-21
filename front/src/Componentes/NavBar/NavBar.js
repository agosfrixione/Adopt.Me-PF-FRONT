import React from "react";
import stl from "../NavBar/NavBar.module.css"

export default function NavBar() {

    return (

        <div className={stl.navbar}>
     <p className={stl.logo}>Adopt.Me</p>
     <div className={stl.algomas}>
     <h4>Blog</h4>
     <h4>🌙</h4>
     <a href="#footer">+ Info</a>
     </div>
     <div className={stl.login}>      
     <button className={stl.buttons}>Registrarse</button>
     <button className={stl.buttons}>Log In</button>
     </div>
     </div>

    )
}