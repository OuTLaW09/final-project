import './MapMainPage.scss';
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';
import { DepartureArray, DepartureArrayName } from '../MainPage/MainPage';
import L, { DivIcon } from 'leaflet';


console.log(DepartureArray);
console.log(DepartureArrayName);
const createCustomIcon = (name: string) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div class='inside-marker'>
        <div class= "circle-side">
          <p>time</p>
        </div>
        <div class="city-name">${name}</div>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
};

export const MapMainPage = () => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const departureArrayForPolyline: any[] = [...DepartureArray];
  departureArrayForPolyline.push(DepartureArray[0]);

  return (
    
    <div className="map">
      <MapContainer center={[40.409264, 49.867092]} zoom={2}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
        />
        {DepartureArray.map((cityLoc, index) => {
      
          return (
            <>
              <Marker position={cityLoc} icon={createCustomIcon(DepartureArrayName[index])}>
                <Popup>{DepartureArrayName[index]}</Popup>;
              </Marker>
              return(
                <>
                {
                 departureArrayForPolyline.map((cityLoc, index, array) => (
                  index < array.length - 1 && (
                    <Polyline
                      key={index}
                      positions={[cityLoc, array[index + 1]]}
                      color={getRandomColor()}
                    />
                  )
                ))
                }
                

                </>

              )
             
              
            </>
          );
        })}
      </MapContainer>
    </div>
  );
};
