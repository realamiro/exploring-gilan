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

const cardsDB = [
  {
    img: {
      path:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/MasulehView.JPG/280px-MasulehView.JPG",
      alt: "ماسوله",
    },
    title: "ماسوله",
    description:
      "شهر تاریخی و گردشگری ماسوله[۳]، یکی از نقاط تاریخی، سرسبز و خوش آب و هوای شمال ایران با هوای مه آلود، تابستان‌های خنک و زمستان‌های پر برف است که بومیان آن را تالش‌ها تشکیل می‌دهند. ماسوله در جنوب غربی استان گیلان در بخش سردار جنگل فومن، ۶۰ کیلومتری شهر رشت ۳۶ کیلومتری شهر فومن و ۲۰ کیلومتری شهر ماکلوان واقع است. ",
  },
  {
    img: {
      path:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/MasulehView.JPG/280px-MasulehView.JPG",
      alt: "ماسوله",
    },
    title: "ماسوله",
    description:
      "شهر تاریخی و گردشگری ماسوله[۳]، یکی از نقاط تاریخی، سرسبز و خوش آب و هوای شمال ایران با هوای مه آلود، تابستان‌های خنک و زمستان‌های پر برف است که بومیان آن را تالش‌ها تشکیل می‌دهند. ماسوله در جنوب غربی استان گیلان در بخش سردار جنگل فومن، ۶۰ کیلومتری شهر رشت ۳۶ کیلومتری شهر فومن و ۲۰ کیلومتری شهر ماکلوان واقع است. ",
  },
  {
    img: {
      path:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/MasulehView.JPG/280px-MasulehView.JPG",
      alt: "ماسوله",
    },
    title: "ماسوله",
    description:
      "شهر تاریخی و گردشگری ماسوله[۳]، یکی از نقاط تاریخی، سرسبز و خوش آب و هوای شمال ایران با هوای مه آلود، تابستان‌های خنک و زمستان‌های پر برف است که بومیان آن را تالش‌ها تشکیل می‌دهند. ماسوله در جنوب غربی استان گیلان در بخش سردار جنگل فومن، ۶۰ کیلومتری شهر رشت ۳۶ کیلومتری شهر فومن و ۲۰ کیلومتری شهر ماکلوان واقع است. ",
  },
  {
    img: {
      path:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/MasulehView.JPG/280px-MasulehView.JPG",
      alt: "ماسوله",
    },
    title: "ماسوله",
    description:
      "شهر تاریخی و گردشگری ماسوله[۳]، یکی از نقاط تاریخی، سرسبز و خوش آب و هوای شمال ایران با هوای مه آلود، تابستان‌های خنک و زمستان‌های پر برف است که بومیان آن را تالش‌ها تشکیل می‌دهند. ماسوله در جنوب غربی استان گیلان در بخش سردار جنگل فومن، ۶۰ کیلومتری شهر رشت ۳۶ کیلومتری شهر فومن و ۲۰ کیلومتری شهر ماکلوان واقع است. ",
  },
];

let theme = createMuiTheme({
  typography: {
    fontFamily: ["Vazir", "Roboto", "Arial", "sans-serif"].join(","),
  },
});
theme = responsiveFontSizes(theme);

function App() {
  const [cards, setCards] = useState(cardsDB);

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
