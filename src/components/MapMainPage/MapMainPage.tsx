import './MapMainPage.scss';
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';
import { DepartureArray, DepartureArrayName } from '../MainPage/MainPage';
import L from 'leaflet';
const markerIcon = new L.Icon({
  iconUrl: require('../../assets/Images/marker.png'),
  iconSize: [45, 45],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});
const Departure: any[] = [];
Departure.push(DepartureArray);
Departure.push(DepartureArrayName);
console.log(Departure, 'jkjhkjhk');

export const MapMainPage = () => {
  console.log(DepartureArray);
  const departureArrayForPolyline: any = [...DepartureArray];
  departureArrayForPolyline.push(DepartureArray[0]);

  console.log('departureArrayForPolyline', departureArrayForPolyline);
  return (
    <div className="map">
      <MapContainer center={[40.409264, 49.867092]} zoom={2}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
        />
        {DepartureArray.map((cityLoc) => {
          return (
            <>
              <Marker position={cityLoc} icon={markerIcon}>
                {DepartureArrayName.map((cityName) => {
                  console.log('cityName', cityName);
                  return <Popup>{cityName}</Popup>;
                })}
              </Marker>
              <Polyline positions={departureArrayForPolyline} />
            </>
          );
        })}
      </MapContainer>
    </div>
  );
};
