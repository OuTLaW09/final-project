import './MapMainPage.scss';
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';
import L, { DivIcon } from 'leaflet';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Modal, Tabs, Timeline } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import { SpinPage } from '../SpinPage/SpinPage';
import rightSign from '../../assets/Images/right-arrow.png';
import divider from '../../assets/Images/divider.png';
import airplane from '../../assets/Images/air-transport.png';
import train from '../../assets/Images/train.png';

type CitiesType = {
  bgo: {};
  carriers: {
    name: string;
    type: string;
    docId: string;
  }[];
  cities: {
    name:string;
    bookingUrl:string;
    location:any;

  }[];
  citiesCount: number;
  deviceIdentifier: string;
  id: string;
  lang: string;
  optIndex: number;
  optimized: boolean;
  shuffle: boolean;
  stations: {
    docId: string;
    cityId: string;
    name: string;
    shortName: string;
  }[];
  themeId: string;
  themeName: string;
  tour: {
    type: string;
    date: string;
    transfer: {
      originId: string;
      destinationId: string;
      arrivalTime: string;
      departureTime: string;
      duration: string;
      carrierId:string

    };
  }[];
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
const ScrollTicket = () => {
  const handleScroll = (event:any) => {
    const delta = event.deltaY;
    const scrollTicket = document.getElementById('scrollTicket');

    if (scrollTicket) {
      scrollTicket.scrollTop += delta;
    };
  };};
export const MapMainPage = () => {
  let newCityArray: any[] = [];
  function getDaysCount(startDate: Date, endDate: Date) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDifference = Math.abs(end.getTime() - start.getTime());
    const daysCount = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysCount;
  }
  const [info, setInfo] = useState<CitiesType[]>([]);
  const [spin, setSpin] = useState<boolean>(true);
  const [retryCount, setRetryCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const { signature } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response: Response;
        let data;

        do {
          response = await fetch(`https://api.eightydays.me/api/v3/tour/get/${signature}`);

          if (response.status === 204) {
            setSpin(true);
            setRetryCount((count) => count + 1);
            await new Promise((resolve) => setTimeout(resolve, 1000));
          } else {
            data = await response.json();
          }
        } while (!data);

        if (data.data && data.data.value) {
          setInfo(data.data.value);
          setSpin(false);

          console.log(data);
        } else {
          console.error('Invalid data structure:', data);
          setSpin(false);
        }
      } catch (error) {
        setSpin(false);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [signature, retryCount]);
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

  if (spin === true) {
    return <SpinPage />;
  }



  
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
                    <Marker key={index} position={city.location} icon={createCustomIcon(city['name'])}>
                      <Popup>{city['name']}</Popup>
                    </Marker>
                  ))}

                  {cityLoc.cities.map(
                    (cityLoc, index, array) =>
                      index < array.length - 1 && (
                        <Polyline key={index} positions={[cityLoc.location, array[index + 1].location]} color={getRandomColor()} />
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
        onWheel={ScrollTicket}
        className="ticket"
        id='scrollTicket'
        style={{
          backgroundColor: '#fff',
          opacity: '0.8',
          overflowY:'auto',
          height:'600px'
        }}
      >
        <Timeline>
          {info.map((cityLoc) => {
            if (cityLoc.citiesCount === selectedCount) {
              {
                if (cityLoc.cities.length - 1 === cityLoc.citiesCount) {
                  cityLoc.cities.forEach((city) => newCityArray.push(city));
                  newCityArray.push(cityLoc.cities[0]);
                }
              }

              return (
                <>
                  {newCityArray?.map((city, index, array) => {
                    return (
                      <Timeline.Item key={index}>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                          }}
                        >
                          <div>
                            {cityLoc.tour[index]['type'] === 'start' || cityLoc.tour[index]['type'] === 'finish' ? (
                              <p>{`${cityLoc.tour[index]['type']} | ${new Date(cityLoc.tour[index].date).toLocaleDateString('en-US', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric',
                              })}`}</p>
                            ) : (
                              <p>{`${new Date(cityLoc.tour[index].date).toLocaleDateString('en-US', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric',
                              })}-${new Date(cityLoc.tour[index + 1].date).toLocaleDateString('en-US', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric',
                              })} | ${getDaysCount(new Date(cityLoc.tour[index + 1].date), new Date(cityLoc.tour[index].date))} days`}</p>
                            )}
                            <div className="header-ticket">
                              <p
                                style={{
                                  fontSize: '25px',
                                  fontFamily: 'Lato',
                                  fontWeight: 'bold',
                                  marginTop: '-20px',
                                }}
                              >
                                {` ${city['name']}`}
                              </p>
                              {index<array.length-1 &&(
                               <button style={{
                                border:'1px  solid white',
                                borderRadius:'10px',
                                textDecoration:'none',
                                padding:'5px 15px',
                                textAlign:'center',
                               
                               
                               
                               }}> <Link to={city.bookingUrl} style={{ color:'black'}}>Find Hotel</Link></button>  
                              )}
                            
                            </div>
                            
                          </div>
                          {index < array.length -1 && (
                            <div className="tour-type" style={{ backgroundColor: '#fff',
                             }}>
                             {
                             cityLoc.carriers[index].type==='air'?(
                              <img src={airplane} alt='/' style={{width:'40px',height:'40px'}}/>
                              ):(<img src={train} alt='/' style={{width:'40px',height:'40px'}}/>)}
                              {index <= array.length - 1 && (
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                  <p style={{marginBottom:'-20px'}}> {cityLoc.carriers[index].name}</p>
                                  <p>
                                    {new Date(cityLoc.tour[index + 1].date).toLocaleDateString('en-US', {
                                      month: 'short',
                                      day: 'numeric',
                                    })}
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                          <Link to='' onClick={() => setModalOpen(true)}>
                          <div
                           
                            style={{
                              backgroundColor: '#fff',
                              opacity: '1',
                              boxShadow: '10px 10px 20px 2px',
                              borderRadius: '5%',
                              padding: '15px',
                            }}
                          >
                            {index < array.length - 1 && (
                              <div style={{ display: 'flex' }}>
                                <p
                                  style={{
                                    fontSize: '18px',
                                    fontWeight: 'bolder',
                                  }}
                                >
                                  {`${city['name']} `}
                                </p>
                                <img
                                  src={rightSign}
                                  alt="/"
                                  style={{
                                    width: '20px',
                                    height: '20px',
                                    marginTop: '23px',
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: '18px',
                                    fontWeight: 'bolder',
                                  }}
                                >
                                  {`${array[index + 1]['name']}`}
                                </p>
                              </div>
                            )}

                            {index < array.length - 1 && (
                              <div className="station" style={{ marginTop: '-20px' }}>
                                <div className="long-name" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '-20px' }}>
                                  <p>{cityLoc.stations.find((t) => t.docId === cityLoc.tour[index + 1].transfer.originId)?.name}-</p>
                                  <p>{cityLoc.stations.find((t) => t.docId === cityLoc.tour[index + 1].transfer.destinationId)?.name}</p>
                                </div>
                                <div className="short-name" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                  <p>{cityLoc.stations.find((t) => t.docId === cityLoc.tour[index + 1].transfer.originId)?.shortName}</p>
                                  <div
                                    className="hours"
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                    }}
                                  >
                                    <p>{cityLoc.tour[index + 1].transfer.duration}</p>
                                    <p className="line" style={{ marginTop: '-10px' }}></p>
                                    <p style={{ color: '#43d359', marginTop: '-10px' }}>Non-stop</p>
                                  </div>
                                  <p>{cityLoc.stations.find((t) => t.docId === cityLoc.tour[index + 1].transfer.destinationId)?.shortName}</p>
                                </div>

                                <div className="time" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '-50px' }}>
                                  <p>{cityLoc.tour[index + 1].transfer.departureTime}</p>
                                  <p>{cityLoc.tour[index + 1].transfer.arrivalTime}</p>
                                </div>
                              </div>
                            )}
                          </div>
                          </Link>
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
      <Modal
        title="User Name"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
         <Tabs defaultActiveKey="1">
                <TabPane tab="History" key="1">
                  <div>
                    <p>History</p>
                  </div>
                </TabPane>
                <TabPane tab="Bookings" key="2">
                  <div>
                    <p>Bookings</p>
                  </div>
                </TabPane>
          </Tabs>
      </Modal>
    </div>
  );
};
