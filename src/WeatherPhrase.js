import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherPhrase() {
  if ({ WeatherIcon } === "01d" & "01n" & "02d" & "02n" & "03d" & "03n") {
    return "You can leave your umbrella at home 🌂"
  } if ({ WeatherIcon } === "04d" & "04n") {
    return "You may better think to take an umbrella 🌂"
  } if ({ WeatherIcon } === "09d" & "09n" & "10d" & "10n" & "11d" & "11n" & "13d" & "13n") {
    return "Umbrella time ☔️"
  } else {
    return "You won't see clearer with an umbrella ☂️"
  };
}
