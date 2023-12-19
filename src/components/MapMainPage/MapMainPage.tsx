import './MapMainPage.scss';
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';
import L, { DivIcon } from 'leaflet';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Tabs, Timeline } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import { Divider } from 'rc-menu';

type CitiesType = {
  bgo: {};
  carriers: [];
  cities: [];
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
    html: `<div class='inside-marker'>
        <div class= "circle-side">
          <p>time</p>
        </div>
        <div class="city-name">${name}</div>
      </div> `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
};

export const MapMainPage = () => {
  function getDaysCount(startDate:Date, endDate:Date) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDifference = Math.abs(end.getTime() - start.getTime());
    const daysCount = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysCount;
  }
  const [info, setInfo] = useState<CitiesType[]>([]);
  const { signature } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response: Response;
        let data;

        do {
          response = await fetch(`https://api.eightydays.me/api/v3/tour/get/${signature}`);

          if (response.status === 204) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
          } else {
            data = await response.json();
          }
        } while (!data);

        if (data.data && data.data.value) {
          setInfo(data.data.value);
          console.log(data);
        } else {
          console.error('Invalid data structure:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
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

  const [selectedCount, setSelectedCount] = useState<number | null>(null);

  const handleTabClick = (count: number) => {
    setSelectedCount(count);
  };
  useEffect(() => {
    if (info.length > 0) {
      setSelectedCount(info[0]?.citiesCount);
    }
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
            if (cityLoc.citiesCount === selectedCount) {
              console.log(cityLoc.cities, 'cities');

              return (
                <>
                  {cityLoc.cities.map((city, index) => (
                    <Marker key={index} position={city['location']} icon={createCustomIcon(city['name'])}>
                      <Popup>{city['name']}</Popup>
                    </Marker>
                  ))}

                  {cityLoc.cities.map(
                    (cityLoc, index, array) =>
                      index < array.length - 1 && (
                        <Polyline key={index} positions={[cityLoc['location'], array[index + 1]['location']]} color={getRandomColor()} />
                      ),
                  )}
                  {cityLoc.cities.map(
                    (cityLoc, index, array) =>
                      index < array.length - 1 && (
                        <Polyline key={index} positions={[array[0]['location'], array[array.length - 1]['location']]} color={getRandomColor()} />
                      ),
                  )}
                </>
              );
            }
          })}
        </MapContainer>
      )}
      <div className="tabs">
        <Tabs type="card" activeKey={String(selectedCount)}>
          {info.map((city) => (
            <TabPane
              tab={<Button onClick={() => handleTabClick(city.citiesCount)}>{` ${city.citiesCount} cities`}</Button>}
              key={String(city.citiesCount)}
            />
          ))}
        </Tabs>
      </div>
      <div
        className="ticket"
        style={{
          background: 'transparent',
        }}
      >
        <Timeline>
          {info.map((cityLoc, indexCityLoc) => {
            if (cityLoc.citiesCount === selectedCount) {
              return (
                <>
                  {cityLoc.cities.map((city, index,array) => {
                    return (
                      <Timeline.Item key={index}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                          }}
                        > <div>
                            {cityLoc.tour[index]['type'] === 'start' || cityLoc.tour[index]['type'] === 'finish' ? (
                              <p>{`${cityLoc.tour[index]['type']} | ${new Date(cityLoc.tour[index]['date']).toLocaleDateString('en-US', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric',
                              })}`}</p>
                            ) : (
                              <p>{`${new Date(cityLoc.tour[index]['date']).toLocaleDateString('en-US', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric',
                              })}-${new Date(cityLoc.tour[index+1]['date']).toLocaleDateString('en-US', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric',
                              })} |${getDaysCount(cityLoc.tour[index+1]['date'],cityLoc.tour[index]['date'])} days`}</p>
                            )}
                            <p
                              style={{
                                fontSize: '25px',
                                fontFamily: 'Lato',
                                fontWeight: 'bold',
                                marginTop:'-20px'
                              }}
                            >
                              {` ${city['name']}`}
                            </p>
                          </div>
                          <div
                          style={{
                            backgroundColor:'#fff',
                            borderRadius:'5%'

                          }}>
                            {index<array.length-1 &&(
                               <p 
                               style={{
                                fontSize:'18px',
                                fontWeight:'bolder'

                               }}>
                                {`${city['name']}-${array[index+1]['name']}`}</p>


                            )}
                        
                                
                                <p>{cityLoc.stations[index]['name']}</p>
                              
                            
                             

                            
                            
                                

                            
                            

                          </div>
                        </div>
                      </Timeline.Item>
                    );
                  })}
                </>
              );
            }
          })}
        </Timeline>
      </div>
    </div>
  );
};
