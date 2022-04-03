import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCityWheather } from "../actions/cityWeather.js";
import { clearFavorits } from "../actions/favorites.js";
import { FavoritesGrid } from "../components/Favorites/FavoritesGrid.js";

export const FavoritesPage = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favoritesCitiesReducer);

    const navigate = useNavigate();

    const handleCardClick = (cityName) => {
        dispatch(getCityWheather(cityName));
        navigate("/");
    };

    const handleClearClick = () => {
        dispatch(clearFavorits());
    };

    if (favorites.length < 1) {
        return (
            <Typography variant="h5" align="center" paddingTop={10}>
                no favoriets...
            </Typography>
        );
    }
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            paddingTop={"50px"}
            style={{ minHeight: "90vh" }}
        >
            <Button
                color="secondary"
                variant="contained"
                sx={{ marginBottom: 5 }}
                onClick={() => handleClearClick()}
            >
                Clear Favorites
            </Button>{" "}
            <FavoritesGrid
                favorites={favorites}
                handleCardClick={handleCardClick}
            />
        </Grid>
    );
};
