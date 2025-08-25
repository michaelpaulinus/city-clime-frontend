import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import type ForecastWeather from '../types/forecast-weather';

function createData(cityName: string, actualTemp: number, feelsLikeTemp: number) {
  return { cityName, actualTemp, feelsLikeTemp };
}

type CityWeatherTableProps = {
  forecastedWeatherPerCity: ForecastWeather[];
};

export default function CityWeatherTable({ forecastedWeatherPerCity }: CityWeatherTableProps) {
  const rows = forecastedWeatherPerCity.map(city =>
    createData(city.location.name, city.current.temp_c, city.current.feelslike_c)
  );

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Popular Cities</TableCell>
            <TableCell align="right">Actual Temp (C)</TableCell>
            <TableCell align="right">Feels Like Temp (C)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.cityName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
              >
                {row.cityName}
              </TableCell>
              <TableCell align="right">{row.actualTemp}</TableCell>
              <TableCell align="right">{row.feelsLikeTemp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
