import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import stl from "./HomePage.module.css";

export default function HomePage () {

    return (
       
        <div className={stl.homepage}>
        
          <NavBar />

         <div>
          
            </div>
            <div className={stl.adoptarDarEnAdopcion}>
          
                <div className={stl.adoptar}>
                     
                     <div className={stl.opciones}>
                            <Link to = '/adoptdog'> 
                                 <div className={stl.perros}>Adoptar Perro</div>
                            </Link>
          
                            <Link to = '/adoptcat'> 
                                 <div className={stl.gatos}>Adoptar Gato</div>
                            </Link>
          
                    </div>
                    <p className={stl.tituloAdoptar}>Adoptar Mascota</p>
                    <p className={stl.parrafo}>
                    Solo en la Ciudad de Buenos Aires, habitan más de 1 millón de perros y gatos. 
                    Muchos de ellos son parte de una familia y están cuidados. Pero muchos otros no: están perdidos, 
                    abandonados o quizá toda la vida vivieron en la calle. Y si bien históricamente, por razones de esnobismo, 
                    tendencia o costumbres, lo común era buscar perros o gatos de raza, hoy la historia cambió y 
                    viene ganando la pulseada la adopción. Se fueron realizando varios esfuerzos al respecto. 
                    Por ejemplo, en 2011 se creó el Programa Nacional de Tenencia Responsable y Sanidad de Perros y Gatos, 
                    Mascotas Argentinas, a través del decreto 1088. Su objetivo es el mejoramiento del estado sanitario y 
                    el bienestar de estos animales, así como disminuir e instaurar soluciones no eutanásicas 
                    para situaciones derivadas de la convivencia con los seres humanos
                    </p>
                </div>

                <div className={stl.darEnAdopcion}> 
                <p className={stl.darTitulo}>Dar en Adopcion</p>
                <p className={stl.parrafoDarEnAdopcion}>Adoptar a un perro en casa es una de las decisiones más importantes que puedes tomar, 
                                   ya que tu estilo de vida se verá condicionado por su cuidado. Evidentemente, tener a un 
                                   pequeño peludo es un acto voluntario y nadie debe verse obligado a acogerlo, pero una vez 
                                   dado el paso es fundamental garantizarle los cuidados básicos a lo largo de su vida para 
                                   que goce de una buena salud.

                                   No obstante, determinadas circunstancias, como problemas de salud del dueño, problemas económicos 
                                   que impidan mantener a un perro en casa, una inesperada camada de cachorros, el fallecimiento del 
                                   dueño o una convivencia complicada entre animales y personas, pueden provocar que no se pueda 
                                   seguir atendiendo debidamente al animal y que se vea afectado por malos o pobres cuidados. 
                                   Si piensas "no puedo tener más a mi perro, ¿dónde lo puedo llevar?". Ingresa para ver los
                                   pasos a seguir</p>
                      
                            <Link to = '/givepet'>
                                 <button className={stl.botonDarAdopcion}>Dar en Adopcion</button>
                            </Link>
                         
                 </div>

         </div>

                <div className={stl.otrosServicios}>
                        <Link to = '/animalabuse'> 
                            <button className={stl.botonOtrosServicios}>Denunciar maltrato</button>
                        </Link>
                        <Link to = '/otherthings'> 
                             <button className={stl.botonOtrosServicios}>Te puede Interesar</button>
                        </Link>
                </div>
                
          <div id="footer">
          <Footer />
          </div>
        </div>
        
        
    )                     
}