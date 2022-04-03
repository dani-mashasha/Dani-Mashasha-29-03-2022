import {
    ADD,
    REMOVE,
    GET_FROM_LOCALSTORAGE,
    CLEAR,
} from "../constants/actionTypes.js";

export const addToFavoriets = (city) => (dispatch) => {
    const favorites = JSON.parse(localStorage.getItem("favoriets"));
    if (!favorites) {
        localStorage.setItem("favoriets", JSON.stringify([city]));
    } else {
        localStorage.setItem("favoriets", JSON.stringify([...favorites, city]));
    }
    dispatch({ type: ADD, payload: city });
};

export const removeFromFavoriets = (key) => (dispatch) => {
    const favorites = JSON.parse(localStorage.getItem("favoriets"));
    localStorage.setItem(
        "favoriets",
        JSON.stringify(favorites.filter((city) => city.Key !== key))
    );
    dispatch({ type: REMOVE, payload: key });
};

export const getFromLocalstorage = (favorites) => (dispatch) => {
    dispatch({ type: GET_FROM_LOCALSTORAGE, payload: favorites });
};
export const clearFavorits = () => (dispatch) => {
    localStorage.clear();
    dispatch({ type: CLEAR });
};
