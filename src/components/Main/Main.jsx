import React, { useState } from "react";
import axios from "axios";
import "./main.css";
import useGeolocation from "../useGeolocation/useGeolocation";

function Main() {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);

  const { latitude, longitude} = useGeolocation();

  const apiCall = async () => {
    try {
      let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=a31c2c7beee129eba49814fecf076451`;
      const weatherResponse = await axios.get(URL);
      console.log(weatherResponse);
      setTemperature(weatherResponse.data.main.temp);
      setHumidity(weatherResponse.data.main.humidity);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="date-location">
        <div className="date">
          <p className="date-clock">7:10 AM</p>
          <p className="date-day">Sunday, January 30, 2022</p>
        </div>
        <div className="location">
          <p>Moldova</p>
          <p>Mingir</p>
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
