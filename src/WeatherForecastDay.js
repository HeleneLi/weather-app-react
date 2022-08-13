import React from "react";
import WeatherIcon from "./WeatherIcon";
//Render Forecast Day

export default function WeatherForecastDay(props) {
  //receives actual data from the day
  function maxTemp() {
    let maxtemp = Math.round(props.data.temp.max);
    return `${maxtemp}`;
  }
  function minTemp() {
    let mintemp = Math.round(props.data.temp.min);
    return `${mintemp}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
    <div className="week-day">{day()}</div>
    <WeatherIcon code={props.data.weather[0].icon} size={24} /><div className="forecast-temp">
      <span className="forecast-temp-max">{maxTemp()}° | </span>
      <span className="forecast-temp-min">{minTemp()}°</span>
    </div>
    </div>
  );
}
