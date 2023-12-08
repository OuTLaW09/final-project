import './MapMainPage.scss'
import React, { useRef } from "react";
import { MapContainer, TileLayer } from 'react-leaflet';

 
export const MapMainPage = () => {
  const mapRef=useRef()
  
  return (
    <div className='map'>
      <p>test</p>
      <MapContainer center={[40.40926170,49.86709240]} zoom={13} 
      >
        <TileLayer url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
        />

      </MapContainer>
      
    </div>
    
   
  );
};