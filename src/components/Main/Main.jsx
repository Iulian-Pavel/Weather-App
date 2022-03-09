import React, { useState } from "react";
import axios from "axios";
import "./main.css";
import useGeolocation from "../useGeolocation/useGeolocation";
import bg1 from './images/bg1.jpg';
import bg2 from './images/bg2.jpg';
import bg3 from './images/bg3.jpg';
import bg4 from './images/bg4.jpg';


function Main() {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const { latitude, longitude } = useGeolocation();

  const images = [bg1, bg2, bg3, bg4];

  let randomImage = images[Math.floor(Math.random() * images.length)];

  let date = new Date();
  let today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

  const apiCall = async () => {
    try {
      let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=a31c2c7beee129eba49814fecf076451`;
      const weatherResponse = await axios.get(URL);
      console.log(weatherResponse);
      setTemperature(weatherResponse.data.main.temp);
      setHumidity(weatherResponse.data.main.humidity);
      setCountry(weatherResponse.data.sys.country);
      setCity(weatherResponse.data.name);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="date-location" style={{ backgroundImage: `url(${randomImage})` }}>
        <div className="date">
          <p className="date-clock">{ time }</p>
          <p className="date-day">{ today }</p>
        </div>
        <div className="location">
          <p>{ country }</p>
          <p>{ city }</p>
          <button onClick={apiCall}>call</button>
        </div>
      </div>

      {/* <button onClick={apiCall}>apicall</button>
        <button onClick={getUserLocation}>check geolocation</button>
        <div className="weather-info">
          <p>temperature: {this.state.temperature}</p>
          <p>humidity: {this.state.humidity}</p>
        </div>
        <p>Date: {this.state.currentDate}</p>
        {this.state.isGeolocationAvailable ? (
            <p>geolocation is available</p>
        ) : (
          <p>geolocation is not available</p>
        )} */}
    </>
  );
}

export default Main;
