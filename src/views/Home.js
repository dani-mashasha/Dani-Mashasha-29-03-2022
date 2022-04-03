import React, { useEffect } from "react";
import { WeatherDetails } from "../components/WeatherDetails/WeatherDetails.js";
import { SearchBar } from "../components/SearchBar/SearchBar.js";
import { Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCityWheather } from "../actions/cityWeather.js";
import { getFromLocalstorage } from "../actions/favorites.js";

export const Home = () => {
    const dispatch = useDispatch();
    const cityWheather = useSelector((state) => state.cityWeatherReducer);

    // test:
    // const cityWheather = {
    //     LocalizedName: "ashkelon",
    //     Country: "israel",
    //     Key: "551",
    //     CurrentConditions: [
    //         {
    //             LocalObservationDateTime: "2022-03-29T15:57:00+05:30",
    //             EpochTime: 1648549620,
    //             WeatherText: "Partly sunny",
    //             WeatherIcon: 3,
    //             HasPrecipitation: false,
    //             PrecipitationType: null,
    //             IsDayTime: true,
    //             Temperature: {
    //                 Metric: {
    //                     Value: 35.2,
    //                     Unit: "C",
    //                     UnitType: 17,
    //                 },
    //                 Imperial: {
    //                     Value: 95,
    //                     Unit: "F",
    //                     UnitType: 18,
    //                 },
    //             },
    //             MobileLink:
    //                 "http://www.accuweather.com/en/in/israin-kalan/3214635/current-weather/3214635?lang=en-us",
    //             Link: "http://www.accuweather.com/en/in/israin-kalan/3214635/current-weather/3214635?lang=en-us",
    //         },
    //     ],
    //     FiveDaysForcast: {
    //         Headline: {
    //             EffectiveDate: "2022-03-31T13:00:00+05:30",
    //             EffectiveEpochDate: 1648711800,
    //             Severity: 5,
    //             Text: "Expect showers Thursday afternoon",
    //             Category: "rain",
    //             EndDate: "2022-03-31T19:00:00+05:30",
    //             EndEpochDate: 1648733400,
    //             MobileLink:
    //                 "http://www.accuweather.com/en/in/israin-kalan/3214635/daily-weather-forecast/3214635?lang=en-us",
    //             Link: "http://www.accuweather.com/en/in/israin-kalan/3214635/daily-weather-forecast/3214635?lang=en-us",
    //         },
    //         DailyForecasts: [
    //             {
    //                 Date: "2022-03-29T07:00:00+05:30",
    //                 EpochDate: 1648517400,
    //                 Temperature: {
    //                     Minimum: {
    //                         Value: 73,
    //                         Unit: "F",
    //                         UnitType: 18,
    //                     },
    //                     Maximum: {
    //                         Value: 95,
    //                         Unit: "F",
    //                         UnitType: 18,
    //                     },
    //                 },
    //                 Day: {
    //                     Icon: 3,
    //                     IconPhrase: "Partly sunny",
    //                     HasPrecipitation: false,
    //                 },
    //                 Night: {
    //                     Icon: 37,
    //                     IconPhrase: "Hazy moonlight",
    //                     HasPrecipitation: false,
    //                 },
    //                 Sources: ["AccuWeather"],
    //                 MobileLink:
    //                     "http://www.accuweather.com/en/in/israin-kalan/3214635/daily-weather-forecast/3214635?day=1&lang=en-us",
    //                 Link: "http://www.accuweather.com/en/in/israin-kalan/3214635/daily-weather-forecast/3214635?day=1&lang=en-us",
    //             },
    //             {
    //                 Date: "2022-03-30T07:00:00+05:30",
    //                 EpochDate: 1648603800,
    //                 Temperature: {
    //                     Minimum: {
    //                         Value: 75,
    //                         Unit: "F",
    //                         UnitType: 18,
    //                     },
    //                     Maximum: {
    //                         Value: 94,
    //                         Unit: "F",
    //                         UnitType: 18,
    //                     },
    //                 },
    //                 Day: {
    //                     Icon: 5,
    //                     IconPhrase: "Hazy sunshine",
    //                     HasPrecipitation: false,
    //                 },
    //                 Night: {
    //                     Icon: 37,
    //                     IconPhrase: "Hazy moonlight",
    //                     HasPrecipitation: false,
    //                 },
    //                 Sources: ["AccuWeather"],
    //                 MobileLink:
    //                     "http://www.accuweather.com/en/in/israin-kalan/3214635/daily-weather-forecast/3214635?day=2&lang=en-us",
    //                 Link: "http://www.accuweather.com/en/in/israin-kalan/3214635/daily-weather-forecast/3214635?day=2&lang=en-us",
    //             },
    //             {
    //                 Date: "2022-03-31T07:00:00+05:30",
    //                 EpochDate: 1648690200,
    //                 Temperature: {
    //                     Minimum: {
    //                         Value: 74,
    //                         Unit: "F",
    //                         UnitType: 18,
    //                     },
    //                     Maximum: {
    //                         Value: 95,
    //                         Unit: "F",
    //                         UnitType: 18,
    //                     },
    //                 },
    //                 Day: {
    //                     Icon: 14,
    //                     IconPhrase: "Partly sunny w/ showers",
    //                     HasPrecipitation: true,
    //                     PrecipitationType: "Rain",
    //                     PrecipitationIntensity: "Light",
    //                 },
    //                 Night: {
    //                     Icon: 33,
    //                     IconPhrase: "Clear",
    //                     HasPrecipitation: false,
    //                 },
    //                 Sources: ["AccuWeather"],
    //                 MobileLink:
    //                     "http://www.accuweather.com/en/in/israin-kalan/3214635/daily-weather-forecast/3214635?day=3&lang=en-us",
    //                 Link: "http://www.accuweather.com/en/in/israin-kalan/3214635/daily-weather-forecast/3214635?day=3&lang=en-us",
    //             },
    //             {
    //                 Date: "2022-04-01T07:00:00+05:30",
    //                 EpochDate: 1648776600,
    //                 Temperature: {
    //                     Minimum: {
    //                         Value: 75,
    //                         Unit: "F",
    //                         UnitType: 18,
    //                     },
    //                     Maximum: {
    //                         Value: 99,
    //                         Unit: "F",
    //                         UnitType: 18,
    //                     },
    //                 },
    //                 Day: {
    //                     Icon: 1,
    //                     IconPhrase: "Sunny",
    //                     HasPrecipitation: false,
    //                 },
    //                 Night: {
    //                     Icon: 33,
    //                     IconPhrase: "Clear",
    //                     HasPrecipitation: false,
    //                 },
    //                 Sources: ["AccuWeather"],
    //                 MobileLink:
    //                     "http://www.accuweather.com/en/in/israin-kalan/3214635/daily-weather-forecast/3214635?day=4&lang=en-us",
    //                 Link: "http://www.accuweather.com/en/in/israin-kalan/3214635/daily-weather-forecast/3214635?day=4&lang=en-us",
    //             },
    //             {
    //                 Date: "2022-04-02T07:00:00+05:30",
    //                 EpochDate: 1648863000,
    //                 Temperature: {
    //                     Minimum: {
    //                         Value: 75,
    //                         Unit: "F",
    //                         UnitType: 18,
    //                     },
    //                     Maximum: {
    //                         Value: 98,
    //                         Unit: "F",
    //                         UnitType: 18,
    //                     },
    //                 },
    //                 Day: {
    //                     Icon: 2,
    //                     IconPhrase: "Mostly sunny",
    //                     HasPrecipitation: false,
    //                 },
    //                 Night: {
    //                     Icon: 33,
    //                     IconPhrase: "Clear",
    //                     HasPrecipitation: false,
    //                 },
    //                 Sources: ["AccuWeather"],
    //                 MobileLink:
    //                     "http://www.accuweather.com/en/in/israin-kalan/3214635/daily-weather-forecast/3214635?day=5&lang=en-us",
    //                 Link: "http://www.accuweather.com/en/in/israin-kalan/3214635/daily-weather-forecast/3214635?day=5&lang=en-us",
    //             },
    //         ],
    //     },
    // };
    // console.log(cityWheather);

    const handleOptionChange = async (e) => {
        const value = e.target.innerText;
        dispatch(getCityWheather(value));
    };

    useEffect(() => {
        if (!cityWheather.LocalizedName) {
            dispatch(getCityWheather("tel aviv"));
        }
        const favoritesData = JSON.parse(localStorage.getItem("favoriets"));
        if (favoritesData) {
            dispatch(getFromLocalstorage(favoritesData));
        }
    }, []);
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            padding={"15px"}
            style={{ minHeight: "90vh" }}
        >
            <SearchBar handleOptionChange={handleOptionChange} />
            {!cityWheather.CurrentConditions ||
            !cityWheather.FiveDaysForcast ? (
                <Typography variant="h5" align="center" paddingTop={10}>
                    The allowed number of requests has been exceeded...
                </Typography>
            ) : (
                <WeatherDetails currentCity={cityWheather} />
            )}
        </Grid>
    );
};
