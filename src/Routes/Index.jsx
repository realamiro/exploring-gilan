import React, { useState } from "react";
import Header from "../Components/Header";
import Cards from "../Components/Cards";
import json from "../data.json";

const Index = () => {
  const [cards, setCards] = useState(json.data);

  return (
    <div>
      <Header />
      <Cards cards={cards} />
    </div>
  );
};

export default Index;
