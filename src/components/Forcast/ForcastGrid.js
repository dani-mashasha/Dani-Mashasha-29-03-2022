import React from "react";
import { Grid } from "@mui/material";

import { ForcastCard } from "./ForcastCard.js";

export const ForcastGrid = ({ dailyForecasts }) => {
    return (
        <Grid container spacing={2} justifyContent={"center"}>
            {dailyForecasts.map((dayForcast) => (
                <Grid item key={dayForcast.Date}>
                    <ForcastCard dayForcast={dayForcast} />
                </Grid>
            ))}
        </Grid>
    );
};
