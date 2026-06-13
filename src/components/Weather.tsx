import { useState, useEffect } from "react";

// Module-level cache with 30-minute TTL
interface CacheEntry {
  data: { iconUrl: string; temperature: number } | null;
  timestamp: number;
}

let weatherCache: CacheEntry | null = null;
const CACHE_TTL = 30 * 60 * 1000; // 30 minutes

const OWM_TO_METEOCONS: Record<string, string> = {
  "01d": "clear-day",
  "01n": "clear-night",
  "02d": "partly-cloudy-day",
  "02n": "partly-cloudy-night",
  "03d": "cloudy",
  "03n": "cloudy",
  "04d": "overcast-day",
  "04n": "overcast-night",
  "09d": "drizzle",
  "09n": "drizzle",
  "10d": "partly-cloudy-day-rain",
  "10n": "partly-cloudy-night-rain",
  "11d": "thunderstorms-day",
  "11n": "thunderstorms-night",
  "13d": "partly-cloudy-day-snow",
  "13n": "partly-cloudy-night-snow",
  "50d": "mist",
  "50n": "mist"
};

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
        
        const owmIcon = data.weather[0].icon;
        const meteoconSlug = OWM_TO_METEOCONS[owmIcon] || "clear-day";
        
        const result = {
          iconUrl: `https://cdn.meteocons.com/3.0.0-next.10/svg/fill/${meteoconSlug}.svg`,
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
    <span style={{ display: 'inline-flex', alignItems: 'center', verticalAlign: 'middle', fontWeight: 600 }}>
      <img 
        src={weatherData.iconUrl} 
        alt="Weather" 
        style={{ width: '28px', height: '28px', marginRight: '4px' }}
        loading="lazy"
      />
      {Math.round(weatherData.temperature)}°C
    </span>
  );
};

export default Weather;