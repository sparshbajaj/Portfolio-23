import { useState, useEffect } from "react";

const Weather = () => {
  const [iconUrl, setIconUrl] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Dublin,IE&appid=d0a5aa0dcf2eeca356d8d795a6d9462b&units=metric"
      );
      const data = await response.json();
      setIconUrl(`http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
      // setIconUrl(`http://openweathermap.org/img/w/${data.weather[0].icon.slice(0, -1)}d.png`);
    };
    fetchWeather();
  }, []);

  return iconUrl;
  
};

export default Weather;
