import { useEffect, useState } from 'react';
import CityWeatherTable from './components/CityWeatherTable';
import weatherService from './services/weather-service';
import './App.css';
import type ForecastWeather from './types/forecast-weather';

function App() {
  const [weather, setWeather] = useState([] as ForecastWeather[]);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await weatherService.getForecastedWeather();
      setWeather(response.data);
    };

    fetchWeather();
  }, []);

  return (
    <>
      <div>
        <CityWeatherTable forecastedWeatherPerCity={weather} />
      </div>
    </>
  );
}

export default App;
