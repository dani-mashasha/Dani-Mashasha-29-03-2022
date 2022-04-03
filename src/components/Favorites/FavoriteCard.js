import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles.js";

export const FavoriteCard = ({ favoriteCity, handleCardClick }) => {
    const classes = useStyles();
    return (
        <CardActionArea
            onClick={() => handleCardClick(favoriteCity.LocalizedName)}
        >
            <Card className={classes.cardWhraper}>
                <CardContent align="center">
                    <Typography gutterBottom variant="h5" component="div">
                        {favoriteCity.LocalizedName}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {`${favoriteCity.Metric.Value}\xB0C`}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        {favoriteCity.WeatherText}
                    </Typography>
                </CardContent>
            </Card>
        </CardActionArea>
    );
};
