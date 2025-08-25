import { Card, CardContent, CardMedia } from '@mui/material';
import type ForecastWeather from '../types/forecast-weather';

type CityWeatherCardProps = {
  forecastWeather: ForecastWeather;
};

export default function CityWeatherCard({ forecastWeather }: CityWeatherCardProps) {
  return (
    <Card>
      {forecastWeather.location.name}
      <CardContent>
        {forecastWeather.location.localtime}

        <CardMedia
          component="img"
          image={forecastWeather.current.condition.icon}
        />

        {forecastWeather.current.temp_c}
      </CardContent>
    </Card>
  );
}
