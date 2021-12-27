import React from "react";
import "./main.css";

class Main extends React.Component {

  state = {
    temperature: 0,
    humidity: 0
  }

  render() {

    const apiCall = async () => {
        try {
            let URL =
              "https://api.openweathermap.org/data/2.5/weather?q=London&appid=a31c2c7beee129eba49814fecf076451";
            let response = await fetch(URL, {
              'Content-Type': 'application/json'
            });
            let weatherResponse = await response.json();
            console.log(weatherResponse);
            this.setState({ 
              temperature: weatherResponse.main.temp,
              humidity: weatherResponse.main.humidity
            });
          } catch (err) {
            console.log(err);
          }
    }

    return (
      <>
        <button onClick={apiCall}>apicall</button>

        <div className="weather-info">
          <p>temperature: {this.state.temperature}</p>
          <p>humidity: {this.state.humidity}</p>
          <p></p>
          <p></p>
        </div>
      </>
    );
  }
}

export default Main;
