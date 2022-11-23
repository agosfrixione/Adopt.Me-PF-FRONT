import React from "react";
import { Link, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

export default function InfoProceso () {

    const params = useParams();

    return (

        <div key={params.id}>
            <NavBar/>
            <div>
            <h1>PUBLICA LOS ANIMALES QUE TIENES EN ADOPCIÓN</h1>
            </div>

            <div>
            <h2>¿Sabes cómo funciona Adopt.ME?</h2>
            <h3>El objetivo de Adopta.ME es brindarte una herramienta de amplia difusión para que vos, como protector o protectora independiente, colectivo, fundación o asociación civil que resguardas temporalmente perros y gatos, los ofrezcas en adopción; la idea es enlazarte con el mayor número posible de personas que quieran adoptar.
                En Adopta.ME podes publicar información de todos los perros y gatos que tengas en adopción, no hay un límite de publicaciones.
                Empeza por regístrarte. Es muy sencillo, te mandaremos por correo electrónico tu usuario y contraseña para ingresar Adopta.ME y poder publicar la información de los perros y gatos que tengas en adopción.
                Podrás personalizar la información de los perros y gatos que tengas en adopción y que quieras mostrarle a nuestros seguidores y visitantes. Incluso podes comentar sobre sus habilidades o contarnos alguna historia breve sobre su vida. 
                Recorda que también difundimos a través de todas nuestras redes sociales a los perros y gatos que están en Adopta.ME.</h3>
            </div>

            <div>
            <h2>Crea tu cuenta en Adopta.ME</h2>
            <h3>Registrate gratis. Una vez que completes el formulario vas a recibir un correo con tu usuario y contraseña y vas a poder comenzar a publicar tus mascotas.</h3>
            <Link to='/sigup'>
                <button>REGISTRARSE</button>
            </Link>
            </div>

            <div>
            <h2>Requisitos para publicar en Adopt.ME:</h2>
            <h3>Prepará tus datos y la información y las fotos de tu/s mascota/s para su registro.
            Es importante que tus perros y gatos estén vacunados, desparasitados y esterilizados. Si son cachorros de menos de 4 meses, deberás acordar formalmente su esterilización con la persona que los adopte.
            Recorda que, una vez que tus perros o gatos se adoptaron, debes cambiar su estatus de “en adopción” a “adoptado”. Es tu responsabilidad hacerlo a fin de darle certeza a quien visite Adopta.ME y pretenda adoptar.
            </h3>
            </div>

            <Link to='/homepage'>
                <button>VOLVER</button>
            </Link>

            <div id="footer">
                <Footer />
                </div>
                
        </div>
    );
};