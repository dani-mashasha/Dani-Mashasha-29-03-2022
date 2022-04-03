export const initialState = {
    LocalizedName: "",
    Country: "",
    Key: "",
    CurrentConditions: "",
    FiveDaysForcast: "",
};

const cityWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CITY":
            return {
                ...state,
                LocalizedName: action.payload.LocalizedName,
                Country: action.payload.Country,
                Key: action.payload.Key,
            };
        case "FETCH_CURRENT_CONDITIONS":
            return { ...state, CurrentConditions: action.payload };
        case "FETCH_FORCAST":
            return { ...state, FiveDaysForcast: action.payload };
        default:
            return state;
    }
};

export default cityWeatherReducer;
