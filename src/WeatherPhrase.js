import React from "react";

export default function WeatherPhrase(props) {
  const phraseMapping = {
    "01d": "You can leave your umbrella at home 🌂",
    "01n": "You can leave your umbrella at home 🌂",
    "02d": "You can leave your umbrella at home 🌂",
    "02n": "You can leave your umbrella at home 🌂",
    "03d": "You can leave your umbrella at home 🌂",
    "03n": "You can leave your umbrella at home 🌂",
    "04d": "You may better think to take an umbrella 🌂",
    "04n": "You may better think to take an umbrella 🌂",
    "09d": "Umbrella time ☔️",
    "09n": "Umbrella time ☔️",
    "10d": "Umbrella time ☔️",
    "10n": "Umbrella time ☔️",
    "11d": "Umbrella time ☔️",
    "11n": "Umbrella time ☔️",
    "13d": "Umbrella time ☔️",
    "13n": "Umbrella time ☔️",
    "50d": "You won't see clearer with an umbrella ☂️",
    "50n": "You won't see clearer with an umbrella ☂️",
  };
  return phraseMapping[props.code];
};
