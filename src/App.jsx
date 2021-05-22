import React, { useState } from "react";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";
import json from './data.json';

let theme = createMuiTheme({
  typography: {
    fontFamily: ["Vazir", "Roboto", "Arial", "sans-serif"].join(","),
  },
});
theme = responsiveFontSizes(theme);

function App() {
  const [cards, setCards] = useState(json.data);
  console.log(cards);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Navigation />
          <Header />
          <Cards cards={cards} />
          <Footer />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
