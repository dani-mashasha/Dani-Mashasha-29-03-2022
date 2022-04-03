import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles.js";

export const ForcastCard = ({ dayForcast }) => {
    const classes = useStyles();
    const getWeekDay = (date) => {
        const day = new Date(date);
        return day.toString().split(" ")[0];
    };
    const iconNumber =
        dayForcast.Day.Icon < 10
            ? `0${dayForcast.Day.Icon}`
            : dayForcast.Day.Icon;

    return (
        <Card className={classes.dayCard}>
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    align="center"
                    component="div"
                >
                    {getWeekDay(dayForcast.Date)}
                </Typography>
                <CardMedia
                    component="img"
                    height={"50"}
                    image={`https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`}
                    alt={dayForcast.Day.IconPhrase}
                />
                <Typography variant="h6" align="center" color="text.secondary">
                    {`${Math.floor(
                        ((dayForcast.Temperature.Maximum.Value - 32) * 5) / 9
                    )} \xB0C`}
                </Typography>
            </CardContent>
        </Card>
    );
};
