import React from "react";
import axios from "axios";
import "./main.css";

class Main extends React.Component {
  state = {
    temperature: 0,
    humidity: 0,
    isGeolocationAvailable: false,
    latitude: 0,
    longitude: 0,
    currentDate: new Date().toLocaleString()
  };

  render() {
    const apiCall = async () => {
      try {
        let URL =
          `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=metric&appid=a31c2c7beee129eba49814fecf076451`;
        const weatherResponse = await axios.get(URL);
        console.log(weatherResponse);
        this.setState({
          temperature: weatherResponse.data.main.temp,
          humidity: weatherResponse.data.main.humidity,
        });
      } catch (err) {
        console.log(err);
      }
    };

    const getUserLocation = () => {
      if('geolocation' in navigator) {
        this.setState({
          isGeolocationAvailable: true
        });
        navigator.geolocation.getCurrentPosition((position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          console.log('latitude is:', this.state.latitude)
          console.log('longitude is:', this.state.longitude);
      })
      }
    }

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
}

export default Main;
