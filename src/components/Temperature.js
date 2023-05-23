import { useState, useEffect } from "react";

const Temperature = () => {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Dublin,IE&appid=d0a5aa0dcf2eeca356d8d795a6d9462b&units=metric"
      );
      const data = await response.json();
      setTemperature(Math.round(data.main.temp));
    };
    fetchWeather();
  }, []);

  return <>{temperature && `${temperature}°C,`}</>;
};

export default Temperature;