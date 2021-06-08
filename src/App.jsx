// TODO: slider
// TODO: map
// TODO: responsive
// TODO: (maybe) SEO
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Location from './Routes/Location';
import Index from './Routes/Index';

let theme = createMuiTheme({
  typography: {
    fontFamily: ["Vazir", "Roboto", "Arial", "sans-serif"].join(","),
  },
});
theme = responsiveFontSizes(theme);

function App() {

  return (
    <div className="App">
      <Router>
      <Switch>
      </Switch>
        <ThemeProvider theme={theme}>
          <Container maxWidth="lg">
            <Navigation />
            <Route path="/location/:id" component={Location} />
            <Route exact path="/" component={Index} />
            <Footer />
          </Container>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
