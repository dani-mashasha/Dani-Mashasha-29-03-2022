import { combineReducers } from "redux";
import favoritesCitiesReducer from "./favorites.js";
import cityWeatherReducer from "./cityWeather.js";
import autocompleteOptions from "./autocompleteOptions.js";

export default combineReducers({
    favoritesCitiesReducer,
    cityWeatherReducer,
    autocompleteOptions,
});
