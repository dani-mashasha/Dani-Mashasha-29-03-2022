import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
    const location = useLocation();

    return (
        <Box sx={{ flexGrow: 0 }}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Herolo Weather Task
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color={
                            location.pathname === "/" ? "secondary" : "default"
                        }
                        aria-label="menu"
                        component={Link}
                        to="/"
                    >
                        <HomeIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="end"
                        color={
                            location.pathname === "/favorites"
                                ? "secondary"
                                : "default"
                        }
                        aria-label="menu"
                        component={Link}
                        to="/favorites"
                    >
                        <FavoriteIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
