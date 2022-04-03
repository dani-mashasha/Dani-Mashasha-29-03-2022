import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;
const API = axios.create({ baseURL: "http://dataservice.accuweather.com/" });

export const getCityByName = (cityName) =>
    API.get(`/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${cityName}`);
export const getCurrentConditions = (locationKey) =>
    API.get(`/currentconditions/v1/${locationKey}?apikey=${apiKey}`);
export const get5DaysForcast = (locationKey) =>
    API.get(`forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`);
