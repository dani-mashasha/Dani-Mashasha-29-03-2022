import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar.js";
import { Home } from "./views/Home.js";
import { FavoritesPage } from "./views/FavoritesPage.js";
import { Container } from "@mui/material";

function App() {
    return (
        <Router>
            <Container disableGutters>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route
                        exact
                        path="/favorites"
                        element={<FavoritesPage />}
                    />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
