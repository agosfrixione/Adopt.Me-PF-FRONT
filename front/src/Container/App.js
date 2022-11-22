import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from '../Componentes/LandingPage/LandingPage';
import HomePage from '../Componentes/HomePage/HomePage';
import AdoptCat from '../Componentes/AdoptarGato/AdoptarGato';
import AdoptDog from '../Componentes/AdoptarPerro/AdoptarPerro';
import InfoProceso from '../Componentes/DonarMascota/InfoProceso';
import FormRegistro from '../Componentes/FormRegistro/FormRegistro';
import Confirmacion from '../Componentes/DonarMascota/Confirmacion';
import AnimalAbuse from '../Componentes/DenunciarMaltrato/DenunciarMaltrato';
import OtherThings from '../Componentes/TePuedeInteresar/TePuedeInteresar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route exact path = '/' element = {<LandingPage/>} />
    <Route exact path = '/homepage' element = {<HomePage/>} />
    <Route exact path = '/adoptcat' element = {<AdoptCat/>} />
    <Route exact path = '/adoptdog' element = {<AdoptDog/>} />
    <Route exact path = '/givepet' element = {<InfoProceso/>} />
    <Route exact path = '/sigup' element = {<FormRegistro/>} />
    <Route exact path = '/confirmation' element = {<Confirmacion/>} />
    <Route exact path = '/animalabuse' element = {<AnimalAbuse/>} />
    <Route exact path = '/otherthings' element = {<OtherThings/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
