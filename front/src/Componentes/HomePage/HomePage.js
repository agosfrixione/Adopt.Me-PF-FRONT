import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import stl from "./HomePage.module.css";

export default function HomePage () {

    return (
       
        <div className={stl.homepage}>

          <NavBar />

            <div className={stl.adoptarDarEnAdopcion}>

                <div className={stl.adoptar}>
                     <p>Adoptar Mascota</p>
                            <Link to = '/adoptdog'> 
                                 <button>Adoptar Mascota perro</button>
                            </Link>
                            <Link to = '/adoptcat'> 
                                 <button>Adoptar Mascota gato</button>
                            </Link>
                </div>

                <div className={stl.darEnAdopcion}>
                    <p>Dar en Adopcion</p> 
                            <Link to = '/givepet'>
                                 <button>Dar en Adopcion</button>
                            </Link>
                 </div>

         </div>

                <div className={stl.otrosServicios}>
                        <Link to = '/animalabuse'> 
                            <button>Denunciar maltrato</button>
                        </Link>
                        <Link to = '/otherthings'> 
                             <button>Te puede Interesar</button>
                        </Link>
                </div>

        </div>
    )                     
}