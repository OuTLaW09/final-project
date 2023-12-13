import './MapMainPage.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import React from 'react';
import { DepartureArray } from '../MainPage/MainPage';
import L from 'leaflet';
const markerIcon=new L.Icon({
  iconUrl:require('../../assets/Images/marker.png'),
  iconSize:[45,45],
  iconAnchor:[17,46],
  popupAnchor:[0,-46]
});

export const MapMainPage = () => {
  console.log(DepartureArray);
  return (
    <div className="map">
      <MapContainer center={[40.409264, 49.867092]} zoom={13}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
        />
        {
          DepartureArray.map((cityLoc)=>(
            <Marker position={cityLoc}
            icon={markerIcon}

            >
              <Popup><b>city</b></Popup>

            </Marker>
          ))
        }

      </MapContainer>
    </div>
  );
};
