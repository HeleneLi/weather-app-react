import React from "react";

export default function WeatherPhrase(props) {
  const phraseMapping = {
    "01d": "Leave your umbrella at home π",
    "01n": "Leave your umbrella at home π",
    "02d": "Leave your umbrella at home π",
    "02n": "Leave your umbrella at home π",
    "03d": "Leave your umbrella at home π",
    "03n": "Leave your umbrella at home π",
    "04d": "Better take an umbrella π",
    "04n": "Better take an umbrella π",
    "09d": "Umbrella π & Raincoat π§₯ o'clock",
    "10d": "Umbrella π & Raincoat π§₯ o'clock",
    "10n": "Umbrella π & Raincoat π§₯ o'clock",
    "11d": "Umbrella π & Raincoat π§₯ o'clock",
    "11n": "Umbrella π & Raincoat π§₯ o'clock",
    "13n": "Umbrella π & Raincoat π§₯ o'clock",
    "13d": "Umbrella π & Raincoat π§₯ o'clock",
    "09n": "Umbrella π & Raincoat π§₯ o'clock",
    "50d": "Don't bump into someone πΆβπ«οΈ",
    "50n": "Don't bump into someone πΆβπ«οΈ",
  };

  return <p>{phraseMapping[props.code]}</p>;
}
