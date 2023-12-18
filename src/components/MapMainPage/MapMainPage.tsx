import './MapMainPage.scss';
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';
import { DepartureArray, DepartureArrayName,themeId,docId } from '../MainPage/MainPage';
import L, { DivIcon } from 'leaflet';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
type CitiesType={
  bgo:{};
 carriers:[];
 cities:[];
 citiesCount: number;
deviceIdentifier: string;
id: string;
lang: string;
optIndex: number;
optimized: boolean;
shuffle: boolean;
stations: [];
themeId: string;
themeName: string;
tour: [];
type: string;
version: number;
};
const createCustomIcon = (name: string) => {
  return L.divIcon({
    className: 'custom-marker',
    html: 
      `<div class='inside-marker'>
        <div class= "circle-side">
          <p>time</p>
        </div>
        <div class="city-name">${name}</div>
      </div> `
    ,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
};

export const MapMainPage = () => {
  const[info,setInfo]=useState<CitiesType[]>([]);
  const { signature } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      let response: Response;
      let data;

      do {
        response = await fetch(`https://api.eightydays.me/api/v3/tour/get/${signature}`);
        
        if (response.status === 204) {
          // Wait for 1 second before making the next request
          await new Promise((resolve) => setTimeout(resolve, 1000));
        } else {
          data = await response.json();
        }
      } while (!data);
      // set state here
      setInfo(data.data.value);
      console.log(data);
      
    };

    fetchData();
  }, [signature]);
  console.log(info);
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [selectedCount, setSelectedCount] = useState<number|null>(null);

  const handleTabClick = (count:number) => {
    setSelectedCount(count);
  };
  useEffect(() => {
    // Set the initial selectedCount to the count of the first city
    setSelectedCount(info[0]?.citiesCount);
  }, [info]);
   

  return (
    <div className="map">
      {selectedCount !== null && (
      <MapContainer center={[40.409264, 49.867092]} zoom={2}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
        />
        {info.map((cityLoc) => {
          if(cityLoc.citiesCount===selectedCount){
            console.log(cityLoc.cities,'cities');
            {
              cityLoc.cities.map((city)=>{
                console.log(city['location'],'ciytt');

              });
            }
            {
              cityLoc.cities.map((city)=>(
                <Marker position={city['location']} icon={createCustomIcon(city['name'])}>
                <Popup>{city['name']}</Popup>;
              </Marker>

              ));
            }
          
          }
           
          
          return (
            <>
           
              return(
              <>
                {/* {departureArrayForPolyline.map(
                  (cityLoc, index, array) =>
                    index < array.length - 1 && <Polyline key={index} positions={[cityLoc, array[index + 1]]} color={getRandomColor()} />,
                )} */}
              </>
              )
            </>
          );
        })}
      </MapContainer>
      )}
      <div className="tabs">
        <Tabs type="card" activeKey={String(selectedCount)}>
          {info.map((city, index) => (
            <TabPane
              tab={
                <Button onClick={() => handleTabClick(city.citiesCount)}>
                  {` ${city.citiesCount} cities`}
                </Button>
              }
              key={String(city.citiesCount)}
            />
          ))}
        </Tabs>
      </div>
      <div className='ticket'>
          <p>Test</p>
      </div>
  
    </div>
  );
};

