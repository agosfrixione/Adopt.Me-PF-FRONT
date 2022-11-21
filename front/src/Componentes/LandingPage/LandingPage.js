import React from "react";
import { Link } from "react-router-dom";
import stl from "../LandingPage/LandingPage.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function LandingPage() {

   const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
   
      return (
      <div className={stl.landingPage}> 
 
         <div className={stl.titulo}>
            <h1>
               <span>A</span>
               <span>D</span>
               <span>O</span>
               <span>P</span>
               <span>T</span>
               <span>.</span>
               <span>M</span>
               <span>E</span>
            </h1>
         </div> 

         <Carousel responsive={responsive}>
  <div className={stl.imagen1}>Item 1</div>
  <div className={stl.imagen2}>Item 2</div>
  <div className={stl.imagen3}>Item 3</div>
  <div className={stl.imagen4}>Item 4</div>
</Carousel>
       
       <Link to = '/homepage'> 
            <button className={stl.button}>Entrar</button>
         </Link>
       
         <div className={stl.icons}>
          <p className={stl.fineslucro}>Adopt.Me Es una pagina sin fines de lucro</p>
          <div className={stl.facebook}></div>
          <div className={stl.instagram}></div>
          <div className={stl.twitter}></div>
        </div>

      </div>
       
   )   
}