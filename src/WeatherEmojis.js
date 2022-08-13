import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherEmoji(props) {
  const emojiMapping = {
    "01d": "☀️",
    "01n": "🌗",
    "02d": "🌤",
    "02n": "🌃",
    "03d": "⛅️",
    "04d": "☁️",
    "03n": "☁️",
    "04n": "☁️",
    "09d": "🌧",
    "09n": "🌧",
    "10d": "🌦",
    "10n": "🌧",
    "11d": "🌩",
    "11n": "🌩",
    "50d": "🌫",
    "50n": "🌫",
    "13d": "❄️",
    "13n": "❄️",
  };
  return <span role="img">{emojiMapping[props.code]}</span>
}
