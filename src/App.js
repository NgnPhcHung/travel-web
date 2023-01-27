import { ThemeProvider } from "styled-components";
import Navigation from "./components/Navigation";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import RoadMap from "./components/sections/RoadMap";
import Showcase from "./components/sections/Showcase";
import Team from "./components/sections/Team";
import Faq from "./components/sections/Faq";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={light}>
                <Navigation />
                <Home />
                <About />
                <RoadMap />
                <Showcase />
                <Team />
                <Faq />
                <Footer />
            </ThemeProvider>
        </>
    );
}

export default App;
