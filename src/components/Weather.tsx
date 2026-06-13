import { useState, useEffect } from "react";

// Module-level cache with 30-minute TTL
interface CacheEntry {
  data: { iconUrl: string; temperature: number } | null;
  timestamp: number;
}

let weatherCache: CacheEntry | null = null;
const CACHE_TTL = 30 * 60 * 1000; // 30 minutes

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
      // Check cache first
      if (weatherCache && (Date.now() - weatherCache.timestamp) < CACHE_TTL) {
        if (weatherCache.data) {
          setWeatherData(weatherCache.data);
        }
        return;
      }

      try {
        const apiKey = import.meta.env.VITE_APP_OPENWEATHER_API_KEY;
        if (!apiKey) {
          console.error("Missing VITE_APP_OPENWEATHER_API_KEY");
          return;
        }

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Dublin,IE&appid=${apiKey}&units=metric`
        );
        
        if (!response.ok) return;
        
        const data = await response.json();
        
        if (!data?.weather?.[0]?.icon || !data?.main?.temp) return;
        
        const result = {
          iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon.replace(/n$/, 'd')}.png`,
          temperature: data.main.temp
        };

        // Update cache
        weatherCache = { data: result, timestamp: Date.now() };
        
        setWeatherData(result);
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
        loading="lazy"
      />
      {Math.round(weatherData.temperature)}°C
    </span>
  );
};

export default Weather;