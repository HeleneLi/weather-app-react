import React from "react";
import FormattedDate from "./FormattedDate";
import SunriseSet from "./SunriseSet";
import WeatherEmoji from "./WeatherEmojis";
import WeatherIcon from "./WeatherIcon";
import WeatherPhrase from "./WeatherPhrase";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
  <div className="WeatherInfo">
      <h1>{props.data.city}{" "}<WeatherEmoji code={props.data.icon} /></h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date}/>
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <WeatherIcon code={props.data.icon} size={52}/>
            <WeatherTemperature celsius={props.data.temperature}/>
          </div>
          <div className="col-6">
            <ul>
              <li>
                💧 Humidity: {props.data.humidity}
              </li>
              <li>
                💨 Wind: {props.data.wind}
              </li>
              <br></br>
              <li>
                🏙 Sunrise: <SunriseSet date={props.data.sunrise} />
              </li>
              <li>
                🌃 Sunset: <SunriseSet date={props.data.sunset} />
              </li>
            </ul>
          <div className="row mt-3">
          <WeatherPhrase code={props.data.icon} />
          </div>
          </div>
        </div>
    </div>
  );
}
