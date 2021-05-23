import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import json from "../data.json";

const Location = () => {
  const [cards, setCards] = useState(json.data);
  const { id } = useParams();

  const theLocation = cards.filter((crd) => {
    return crd.id === id;
  })

  return (
    <div>{theLocation.map((loc) => {
      return <div key={loc.id}>{loc.title}</div>
    })}</div>
  )
}

export default Location;
