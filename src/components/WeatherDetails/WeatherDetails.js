import { Box, IconButton, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import {
    addToFavoriets,
    removeFromFavoriets,
} from "../../actions/favorites.js";
import { ForcastGrid } from "../Forcast/ForcastGrid.js";
import useStyles from "./styles.js";

export const WeatherDetails = ({ currentCity }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(false);

    const handleClick = () => {
        if (isFavorite) {
            dispatch(removeFromFavoriets(currentCity.Key));
            setIsFavorite(false);
        } else {
            const city = {
                LocalizedName: currentCity.LocalizedName,
                Metric: currentCity.CurrentConditions[0].Temperature.Metric,
                WeatherText: currentCity.CurrentConditions[0].WeatherText,
                Key: currentCity.Key,
            };
            dispatch(addToFavoriets(city));
            setIsFavorite(true);
        }
    };
    const checkInFavorites = () => {
        const favoritesData = JSON.parse(localStorage.getItem("favoriets"));
        if (favoritesData?.find((city) => city.Key === currentCity.Key)) {
            console.log(currentCity);
            setIsFavorite(true);
            console.log(isFavorite);
        } else {
            setIsFavorite(false);
        }
    };

    useEffect(() => {
        checkInFavorites();
    }, [currentCity]);

    return (
        <Paper className={classes.mainWrapper}>
            <Box className={classes.cardHeader}>
                <Box>
                    <Typography variant="h5">
                        {currentCity.LocalizedName}
                    </Typography>
                    <Typography>{currentCity.Country.LocalizedName}</Typography>
                    <Typography align="right" variant="h5">
                        {`${currentCity.CurrentConditions[0].Temperature.Metric.Value}\xB0C`}
                    </Typography>
                </Box>

                <IconButton
                    size="large"
                    color={isFavorite ? "action" : "default"}
                    aria-label="menu"
                    onClick={() => handleClick()}
                >
                    <FavoriteIcon />
                </IconButton>
            </Box>

            <Box className={classes.wheatherText}>
                <Typography align="center" variant={"h4"}>
                    {currentCity.CurrentConditions[0].WeatherText}
                </Typography>
            </Box>

            <ForcastGrid
                dailyForecasts={currentCity.FiveDaysForcast.DailyForecasts}
            />
        </Paper>
    );
};
