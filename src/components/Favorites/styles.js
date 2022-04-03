import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    cardWhraper: {
        width: 200,
        height: 250,
        borderRadius: 5,
        boxShadow: "0 3px 5px 2px rgba(100, 105, 135, .3)",
        "&:hover": {
            backgroundColor: "#EEEEEE",
            opacity: [0.9, 0.8, 0.7],
        },
    },
    SearchBar: {},
});

export default useStyles;
