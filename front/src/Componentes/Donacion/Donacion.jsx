import React from "react";
// import { useState } from "react";

import Paypal from "../Paypal/Paypal";

// import MercadoPago from "../MercadoPago/MercadoPago"



import stl from "./Donacion.module.css";


export default function Donar() {
    
    // const [checkout, setCheckOut] = useState(false)

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

               <label>Donar a:
                <select className={stl.opcionesDonacion}>
                    <option>El Arca de Noé (Cba)</option>
                    <option>Adopteros Argentina (Bs.As)</option>
                    <option>El Campito Refugio (Bs.As)</option>                    
                </select>
               </label>

           </div>

           <div className={stl.metodosPago}>
                
                {/* {checkout ? ( */}
                <Paypal />
                {/* //  ) : ( */}
                {/* // <button className={stl.paypal} onClick={() => {setCheckOut(true)}}></button>
                // )}
                // </div> */}
                {/* <button>Mercado Pago</button>
                <button>Crypto</button>

                {/* <MercadoPago /> */}

        </div>
       </form>


        </div>
    )
}