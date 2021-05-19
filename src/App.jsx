import React from "react";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

let theme = createMuiTheme({
  typography: {
    fontFamily: ["Vazir", "Roboto", "Arial", "sans-serif"].join(","),
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Navigation />
          <Header />
          <Footer />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
