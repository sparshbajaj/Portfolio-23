import { useState, useEffect } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState<{
    iconUrl: string | null;
    temperature: number | null;
  }>({
    iconUrl: null,
    temperature: null
  });

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = import.meta.env.VITE_APP_OPENWEATHER_API_KEY;
        if (!apiKey) {
          console.error("Missing API key");
          return;
        }

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Dublin,IE&appid=${apiKey}&units=metric`
        );
        
        if (!response.ok) return;
        
        const data = await response.json();
        
        if (!data?.weather?.[0]?.icon || !data?.main?.temp) return;
        
        setWeatherData({
          iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon.replace(/n$/, 'd')}.png`,
          temperature: data.main.temp
        });
      } catch (err) {
        console.error(err);
      }
    };
    
    fetchWeather();
  }, []);

  if (!weatherData.iconUrl || weatherData.temperature === null) {
    return null;
  }
  
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', verticalAlign: 'middle' }}>
      <img 
        src={weatherData.iconUrl} 
        alt="Weather" 
        style={{ width: '24px', height: '24px', marginRight: '2px' }}
      />
      {Math.round(weatherData.temperature)}°C
    </span>
  );
};

export default Weather;
