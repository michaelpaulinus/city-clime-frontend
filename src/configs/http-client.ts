import axios, { type CreateAxiosDefaults } from 'axios';

const WEATHER_API_URL = import.meta.env.VITE_BACKEND_BASE_URL;

const configAPI: CreateAxiosDefaults = {
  baseURL: `${WEATHER_API_URL}`,
  headers: {
    Accept: 'application/json; charset=utf-8',
    'Content-Type': 'application/json; charset=utf-8'
  }
};

export default axios.create(configAPI);
