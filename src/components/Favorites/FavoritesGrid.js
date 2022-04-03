import { Grid } from "@mui/material";
import React from "react";
import { FavoriteCard } from "./FavoriteCard.js";

export const FavoritesGrid = ({ favorites, handleCardClick }) => {
    return (
        <Grid container spacing={5} justifyContent={"center"}>
            {favorites.map((favoriteCity) => (
                <Grid item key={favoriteCity.Key}>
                    <FavoriteCard
                        favoriteCity={favoriteCity}
                        handleCardClick={handleCardClick}
                    />
                </Grid>
            ))}
        </Grid>
    );
};
