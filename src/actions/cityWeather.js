import {
    SET_CITY,
    GET_OPTIONS,
    FETCH_CURRENT_CONDITIONS,
    FETCH_FORCAST,
} from "../constants/actionTypes.js";

import * as api from "../api/weather.js";

export const getCityWheather = (cityName) => async (dispatch) => {
    try {
        const { data } = await api.getCityByName(cityName);
        const locationKey = data[0].Key;
        dispatch(getCurrentConditions(locationKey));
        dispatch(get5DaysForcast(locationKey));

        dispatch({ type: SET_CITY, payload: data[0] });
    } catch (error) {
        console.log(error);
    }
};
export const getCityOptions = (cityName) => async (dispatch) => {
    try {
        const { data } = await api.getCityByName(cityName);
        dispatch({ type: GET_OPTIONS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getCurrentConditions = (locationKey) => async (dispatch) => {
    try {
        const { data } = await api.getCurrentConditions(locationKey);
        dispatch({ type: FETCH_CURRENT_CONDITIONS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const get5DaysForcast = (locationKey) => async (dispatch) => {
    try {
        const { data } = await api.get5DaysForcast(locationKey);
        dispatch({ type: FETCH_FORCAST, payload: data });
    } catch (error) {
        console.log(error);
    }
};
