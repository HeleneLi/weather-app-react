import React from "react";
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

  const icon = `icons/${props.data.weather[0].icon}.svg`;

  return (
    <div>
    <div className="week-day">{day()}</div>
    <div className="row">
    <div className="col-sm">
    <div className="card mb-2">
    <div className="card-body mb-3">
    <h5 className="card-title">
    <img src={icon} alt={props.data.weather[0].description} />
    </h5>
    <div className="card-text">
      <div className="forecast-temp">
      <span className="forecast-temp-max">{maxTemp()}°</span>
      <span className="forecast-temp-min">{minTemp()}°</span>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}
