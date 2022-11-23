import React from "react";
import stl from "./Donacion.module.css";

export default function Donar() {

    return (

        <div className={stl.pagina}>  

            <form className={stl.formulario}>

                <h3 className={stl.titulo}>Adopt.Me - Donaciones</h3>
           
           <div className={stl.datos}>

               <label>Nombre:</label>
               <input placeholder="Nombre"></input>

               <label>Apellido:</label>
               <input placeholder="Apellido"></input>

               <label>Email:</label>
               <input placeholder="Email"></input>

           </div>

           <div className={stl.metodosPago}>

                <button>Paypal</button>
                <button>Mercado Pago</button>
                <button>Blockchain</button>

           </div>

       </form>


        </div>
    )
}