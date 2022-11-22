import React, { useState } from "react";
import stl from "../NavBar/NavBar.module.css";
import DayNightToggle from 'react-day-and-night-toggle';
import "./darkmode.css";

export default function NavBar() {

    const [darkTheme, setDarkTheme] = useState(false)

    return (

        <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
        <div className={stl.navbar}>
        </div>
            
             <p className={stl.logo}>Adopt.Me</p>
             

        <div className={stl.algomas}>
             <h4>Blog</h4>
             <a href="#footer">+ Info</a>
             <DayNightToggle
                onChange={() => setDarkTheme(!darkTheme)}
                checked={darkTheme}
            />
        </div>

        <div className={stl.login}>      
             <button className={stl.buttons}>Registrarse</button>
            <button className={stl.buttons}>Log In</button>
        </div>

         {/* <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
      <div className='content'>
         <h1>{darkTheme ? 'Dark Mode' : 'Light Mode'}</h1> 
        <p>
          Do take a note of the <code>color</code> property in the nav bar.
        </p>
        <h1></h1>
      </div>
    </div> */}

     </div>
     

    )
}