import React from "react";
import thermo from "./assets/thermometer.png";
import barometer from "./assets/barometer.png";
import Wind from "./assets/wind.png";
import Humidity from "./assets/humidity.png";

function Data(props) {
  console.log(props);
  const temp = props.data.main.temp + " \u2103";
  const iconid = props.data.weather[0].icon;
  const iconurl = "http://openweathermap.org/img/wn/" + iconid + "@2x.png";
  const desc = "weather is currently " + props.data.weather[0].description;
  const wind = props.data.wind.speed + " Kmph";
  const pressure = props.data.main.pressure + " Pa";
  const humidity = props.data.main.humidity + "%";
  const feelsLike = "Feels like " + props.data.main.feels_like + " \u2103";
  return (
    <div>
      <div className="mid" marginTop="3%">
        <p> {feelsLike}</p>
        <img id="icon" src={iconurl} alt=""></img>
        <p> {desc}</p>
      </div>
      <div className="main" marginTop="3%">
        <div className="vitals">
          <img
            display="inline-block"
            src={thermo}
            alt=""
            width={30}
            height={30}
            margin="2%"
          />
          <h4> {temp}</h4>
        </div>
        <div className="vitals">
          <img
            display="inline-block"
            src={Wind}
            alt=""
            width={30}
            height={30}
            margin="2%"
          />
          <h4> {wind}</h4>
        </div>
        <div className="vitals">
          <img
            display="inline-block"
            src={barometer}
            alt=""
            width={30}
            height={30}
            margin="2%"
          />
          <h4> {pressure}</h4>
        </div>
        <div className="vitals">
          <img
            display="inline-block"
            src={Humidity}
            alt=""
            width={30}
            height={30}
            margin="2%"
          />
          <h4> {humidity}</h4>
        </div>
      </div>
    </div>
  );
}
export default Data;
