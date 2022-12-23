import React, { useEffect, useState } from "react"
import {MapContainer, TileLayer, useMap} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "./Maps.css";

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import stl from "../Maps/Maps.module.css";
import Markers from "./Markers";
import MarkersDogs from "../Maps/MarkersDogs";


export default function MapPets() {

   const [geo, setGeo] = useState({
    lng: -61.043988,
    lat: -34.7361,
})

useEffect(() => {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            setGeo({
                lng: position.coords.longitude,
                lat: position.coords.latitude
            })
        }, 
        function(error) {
            console.log(error)
        }, {
            enableHighAccuracy: true
        });
    
}, [])

    const position = [geo.lat, geo.lng]

    const local = position

    function FlyMapTo() {

      const map = useMap()
  
      useEffect(() => {
          map.flyTo(local)
          
      }, {enableHighAccuracy: true})
  
      return null
  }
    
    return ( 

    <div>
       <NavBar />
       <div className={stl.ubicacionmapa}>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <FlyMapTo />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

          <MarkersDogs />

        </MapContainer>

        <Link to ="/adoptdog">
        <button className={stl.botonMapa}>Volver</button>
        </Link>
        </div>
        <Footer />
    </div>
    )

}