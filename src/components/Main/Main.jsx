import React from "react";
import "./main.css";

class Main extends React.Component {

  render() {

    const apiCall = async () => {
        try {
            let URL =
              "https://api.openweathermap.org/data/2.5/weather?q=London&appid=a31c2c7beee129eba49814fecf076451";
            let response = await fetch(URL, {
              'Content-Type': 'application/json'
            });
            let weatherData = await response.json();
            console.log(weatherData);
          } catch (err) {
            console.log(err);
          }
    }

    return (
      <>
        <button onClick={apiCall}>apicall</button>
      </>
    );
  }
}

export default Main;
