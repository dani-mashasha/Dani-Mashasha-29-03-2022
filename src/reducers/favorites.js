const favoritesCitiesReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "REMOVE":
            return state.filter((city) => city.Key !== action.payload);
        case "GET_FROM_LOCALSTORAGE":
            return [...action.payload];
        case "CLEAR":
            return [];
        default:
            return state;
    }
};

export default favoritesCitiesReducer;
