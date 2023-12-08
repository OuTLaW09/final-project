import './MapMainPage.scss';
import { MapContainer, TileLayer } from 'react-leaflet';
import React from 'react';

export const MapMainPage = () => {
  return (
    <div className="map">
      <MapContainer center={[40.4092617, 49.8670924]} zoom={13} className="">
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
        />
      </MapContainer>
    </div>
  );
};
