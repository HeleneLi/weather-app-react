import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherPhrase(props) {
  const phraseMapping = {
    "01d": "Leave your umbrella at home 🌂",
    "01n": "Leave your umbrella at home 🌂",
    "02d": "Leave your umbrella at home 🌂",
    "02n": "Leave your umbrella at home 🌂",
    "03d": "Leave your umbrella at home 🌂",
    "03n": "Leave your umbrella at home 🌂",
    "04d": "Better take an umbrella 🌂",
    "04n": "Better take an umbrella 🌂",
    "09d": "Umbrella 🌂 & Raincoat 🧥 o'clock",
    "10d": "Umbrella 🌂 & Raincoat 🧥 o'clock",
    "10n": "Umbrella 🌂 & Raincoat 🧥 o'clock",
    "11d": "Umbrella 🌂 & Raincoat 🧥 o'clock",
    "11n": "Umbrella 🌂 & Raincoat 🧥 o'clock",
    "13n": "Umbrella 🌂 & Raincoat 🧥 o'clock",
    "13d": "Umbrella 🌂 & Raincoat 🧥 o'clock",
    "09n": "Umbrella 🌂 & Raincoat 🧥 o'clock",
    "50d": "Don't bump into someone 😶‍🌫️",
    "50n": "Don't bump into someone 😶‍🌫️",
  };

  return <p>{phraseMapping[props.code]}</p>;
}
