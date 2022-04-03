const autocompleteOptions = (state = [], action) => {
    switch (action.type) {
        case "GET_OPTIONS":
            return [...action.payload];
        default:
            return state;
    }
};

export default autocompleteOptions;
