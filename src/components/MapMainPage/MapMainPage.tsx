import './MapMainPage.scss';
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';
import L, { DivIcon } from 'leaflet';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button, Modal, Tabs, Timeline, Select, Space, Popover, message } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import { SpinPage } from '../SpinPage/SpinPage';
import rightSign from '../../assets/Images/right-arrow.png';
import divider from '../../assets/Images/divider.png';
import airplane from '../../assets/Images/air-transport.png';
import train from '../../assets/Images/train.png';
import arrowIcon from '../../assets/Images/arrowIcon.png';

type CitiesType = {
  bgo: {};
  carriers: {
    name: string;
    type: string;
    docId: string;
  }[];
  cities: {
    name: string;
    bookingUrl: string;
    location: any;
    partners:{
      link:string;
      name:string;
    }[];
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
    price: number;
    transfer: {
      originId: string;
      destinationId: string;
      arrivalTime: string;
      departureTime: string;
      duration: string;
      carrierId: string;
    };
  }[];
  type: string;
  version: number;
};
const ScrollTicket = () => {
  const handleScroll = (event: any) => {
    const delta = event.deltaY;
    const scrollTicket = document.getElementById('scrollTicket');

    if (scrollTicket) {
      scrollTicket.scrollTop += delta;
    }
  };
};

export const MapMainPage = () => {
  const [selectedCount, setSelectedCount] = useState<number | null>(null);
  const [info, setInfo] = useState<CitiesType[]>([]);
  const [spin, setSpin] = useState<boolean>(true);
  const [retryCount, setRetryCount] = useState<number>(0);
  const [passengerCount, setPassengerCount] = useState<number>(1);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1096);
  const [timelineVisible, setTimelineVisible] = useState(!isSmallScreen);
  const navigate = useNavigate();
  const { signature } = useParams();

  const newCityArray: any[] = [];
  const colorArray: string[] = [];

  function getDaysCount(startDate: Date, endDate: Date) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDifference = Math.abs(end.getTime() - start.getTime());
    const daysCount = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysCount;
  }

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

  

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1096);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleTimelineVisibility = () => {
    setTimelineVisible(!timelineVisible);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    colorArray.push(color);
    return color;
  };

  const content = (
    <div>
      <p>
        The price includes tickets for <br />
        Trains and Flights on the itinerary.
        <br />
        Accomodation and meals are <br /> not included in the price.
      </p>
    </div>
  );
  const contentTax = (
    <div>
      <p>
        This helps us run our platform and offer services
        <br /> like 24/7 support on your trip.
        <br /> It includes VAT.
      </p>
    </div>
  );
  const calculatePrice = () => {
    let totalPrice = 0;

    info.forEach((city) => {
      if (city.citiesCount === selectedCount) {
        city.tour.forEach((tour) => {
          totalPrice += tour.type !== 'start' ? tour.price : 0;
        });
      }
    });

    return totalPrice;
  };
  const createCustomIcon = (name: string, arrivalDate: string, index: number) => {
    console.log(index);
    return L.divIcon({
      className: 'custom-marker',
      html: `<div class='inside-marker'>
          <div class= "circle-side" style="background-color: ${colorArray[index]}">
            <p>${arrivalDate.split(' ').join('<br>')}</p>
          </div>
          <div class="city-name">${name}</div>
        </div> `,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
  };

  const handleTabClick = (count: number) => {
    setSelectedCount(count);
  };
  useEffect(() => {
    if (info.length > 0) {
      setSelectedCount(info[0]?.citiesCount);
    }
  }, [info]);

  while (spin) {
    if (retryCount > 100) {
      alert('In this date there is no rotation,unfortunately');
      navigate('/');
      break;
    } else {
      return <SpinPage />;
    }
  }

  const handleChangePassengerSelect = (value: number) => {
    setPassengerCount(value);
  };


  

  return (
    <div className="map">
      {selectedCount !== null && (
        <MapContainer center={[40.409264, 49.867092]} zoom={2} minZoom={2}>
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          />
          {info.map((cityLoc) => {
            if (cityLoc.citiesCount === selectedCount) {
              console.log(info);
              console.log(cityLoc);
              return (
                <>
                  {cityLoc.cities.map(
                    (cityLoc, index, array) =>
                      index < array.length - 1 && (
                        <Polyline key={index} positions={[cityLoc.location, array[index + 1].location]} color={getRandomColor()} />
                      ),
                  )}

                  <Polyline
                    positions={[cityLoc.cities[0]['location'], cityLoc.cities[cityLoc.cities.length - 1]['location']]}
                    color={getRandomColor()}
                  />

                  {cityLoc.cities.map((city, index) => (
                    <Marker
                      key={index}
                      position={city.location}
                      icon={createCustomIcon(
                        city['name'],
                        cityLoc.tour[index].type !== 'start'
                          ? new Date(cityLoc.tour[index].date).toLocaleDateString('en-US', {
                              day: 'numeric',
                              month: 'short',
                            })
                          : 'start&finish'.split('&').join('<br>'),
                        index,
                      )}
                    >
                      <Popup>{city['name']}</Popup>
                    </Marker>
                  ))}
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
      {isSmallScreen && (
        <Button
          type="primary"
          style={{ position: 'absolute', bottom: '10px', right: '10px',zIndex:'1000' }}
          onClick={toggleTimelineVisibility}
        >
          {timelineVisible ? 'Hide Timeline' : 'Show Timeline'}
        </Button>
      )}
      <div
        onWheel={ScrollTicket}
        className="ticket"
        id="scrollTicket"
        style={{
          backgroundColor: '#fff',
          opacity: '0.8',
          overflowY: 'auto',
          height: '600px',
          display: isSmallScreen && !timelineVisible ? 'none' : 'block'
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
                              {index < array.length - 1 && (
                                <div className="find-hotel-activities">
                                    <button
                                  style={{
                                    border: '1px  solid white',
                                    borderRadius: '10px',
                                    textDecoration: 'none',
                                    padding: '5px 15px',
                                    textAlign: 'center',
                                  }}
                                >
                                  <a href={city.bookingUrl} target="_blank" style={{ color: 'black' }}>
                                    Find Hotel
                                  </a>
                              
                                </button>
                                {city.partners &&(
                                 <button  style={{
                                  border: '1px  solid white',
                                  borderRadius: '10px',
                                  textDecoration: 'none',
                                  padding: '5px 15px',
                                  textAlign: 'center',
                                }}><a href={city.partners[0].link} target="_blank" style={{ color: 'black' }}>{city.partners[0].name}</a></button> 
                                    
                                    

                                )}
                              

                                </div>
                              
                                
                              )}
                            </div>
                          </div>
                          {index < array.length - 1 && (
                            <div className="tour-type" style={{ backgroundColor: '#fff' }}>
                              {cityLoc?.carriers[index]?.type === 'air' ? (
                                <img src={airplane} alt="/" style={{ width: '40px', height: '40px' }} />
                              ) : (
                                <img src={train} alt="/" style={{ width: '40px', height: '40px' }} />
                              )}
                              {index <= array.length - 1 && (
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                  <p style={{ marginBottom: '-20px' }}> {cityLoc?.carriers[index]?.name}</p>
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
                          {cityLoc.tour[index].type!=='finish' &&(

                          
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
                          )}
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
      <div className="price">
        <div className="price-main">
          {info.map(
            (city, index) =>
              city.citiesCount === selectedCount && (
                <div className="dates-range" key={index}>
                  {city.tour
                    .filter((tour) => tour.type === 'start' || tour.type === 'finish')
                    .map((tour, tourIndex) => (
                      <p key={tourIndex} className="dates">
                        {tour.type === 'start' &&
                          new Date(tour.date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric',
                          })}
                        {tour.type === 'finish' &&
                          new Date(tour.date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric',
                          })}
                      </p>
                    ))}

                  <p className="range">{`${getDaysCount(new Date(city.tour[0].date), new Date(city.tour[city.tour.length - 1].date))} Nights`}</p>
                </div>
              ),
          )}
          <div className="rotate-name">
            {newCityArray.map((city, index, array) => (
              <p>
                {city['name']}
                {index < array.length - 1 && <img src={arrowIcon} alt="/" />}
              </p>
            ))}
          </div>
          <div>
            <div className="passanger-select">
              <div className="left-side-passenger-select">
                <Space wrap>
                  <Select
                    defaultValue={1}
                    style={{ width: 120 }}
                    onChange={handleChangePassengerSelect}
                    options={[
                      { value: 1, label: '1 passenger' },
                      { value: 2, label: '2 passenger' },
                      { value: 3, label: '3 passenger' },
                      { value: 4, label: '4 passenger' },
                    ]}
                  />
                </Space>
                <Popover content={content} title="Help Center" trigger="hover">
                  <button className="help-sign">?</button>
                </Popover>
              </div>
              {passengerCount !== undefined ? (
                <div className="tour-price">price:${calculatePrice() * passengerCount}</div>
              ) : (
                <div className="tour-price">select passenger count</div>
              )}
            </div>
            <div className="tax-and-fees">
              <div className="tax">
                <p>Taxes and Fees</p>
                <Popover content={contentTax} title="Taxes and Fees" trigger="hover">
                  <button className="tax-sign">?</button>
                </Popover>
              </div>
              {passengerCount !== undefined && <div className="tax-amount">${`${Math.trunc(calculatePrice() * 0.1 * passengerCount)}`}</div>}
            </div>
            <hr />
            {passengerCount !== undefined ? (
              <div className="total-price">
                Total price:${calculatePrice() * passengerCount + Math.trunc(calculatePrice() * 0.1 * passengerCount)}
              </div>
            ) : (
              <div className="total-price">Total price:loading...</div>
            )}
          </div>
        </div>
        <button className="buy-ticket" onClick={(()=>(message.success('Successful Operation!')))}>Buy</button>
      </div>
    </div>
  );
};
