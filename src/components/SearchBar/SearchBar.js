import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { getCityOptions } from "../../actions/cityWeather.js";
import { Autocomplete } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import useDebounce from "../../helpers/useDebounce.js";
import useStyles from "./styles.js";

export const SearchBar = ({ handleOptionChange }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [city, setCity] = useState("");
    const debouncedValue = useDebounce(city, 700);

    //test
    // const autocompleteOptions = [];

    const autocompleteOptions = useSelector(
        (state) => state.autocompleteOptions
    );
    const handleInputChange = async (e) => {
        const { value } = e.target;
        setCity(value);
    };

    useEffect(() => {
        dispatch(getCityOptions(city));
    }, [debouncedValue]);

    return (
        <div className={classes.SearchBarWhrapper}>
            <Autocomplete
                className={classes.SearchBar}
                options={autocompleteOptions}
                autoHighlight
                getOptionLabel={(option) => option.LocalizedName}
                onChange={(e) => handleOptionChange(e)}
                renderOption={(props, option) => (
                    <Box
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...props}
                    >
                        {option.LocalizedName}
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Choose a City"
                        onChange={(e) => handleInputChange(e)}
                        inputProps={{
                            ...params.inputProps,
                        }}
                    />
                )}
            />
        </div>
    );
};
