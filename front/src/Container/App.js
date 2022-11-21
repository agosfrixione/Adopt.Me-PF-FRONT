import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from '../Componentes/LandingPage/LandingPage';
import HomePage from '../Componentes/HomePage/HomePage';
import AdoptCat from '../Componentes/AdoptarGato/AdoptarGato';
import AdoptDog from '../Componentes/AdoptarPerro/AdoptarPerro';
import DonatePet from '../Componentes/DonarMascota/DonarMascota';
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
    <Route exact path = '/givepet' element = {<DonatePet/>} />
    <Route exact path = '/animalabuse' element = {<AnimalAbuse/>} />
    <Route exact path = '/otherthings' element = {<OtherThings/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
