import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    mainWrapper: {
        background: "linear-gradient(45deg, #1A374D 30%, #6998AB 90%)",
        borderRadius: 10,
        boxShadow: "0 3px 5px 2px rgba(100, 105, 135, .3)",
        padding: "15px",
        paddingBottom: "25px",
        color: "white",
    },
    cardHeader: {
        display: "flex",
        justifyContent: "space-between",
    },
    wheatherText: {
        padding: "40px",
    },
});

export default useStyles;
