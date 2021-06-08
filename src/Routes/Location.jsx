import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Background from '../Components/Location/Background';
import Title from '../Components/Location/Title';
import Map from '../Components/Map';
import json from "../data.json";

const Location = () => {
  const [cards, setCards] = useState(json.data);
  const { id } = useParams();

  const theLocation = cards.filter((crd) => {
    return crd.id === id;
  })

  return (
    <div>{theLocation.map((loc) => {
      return <div key={loc.id}>
      <Background src={loc.images[0].img.path} alt={loc.images[0].img.alt}/>
      <Title title={loc.title} description={loc.description}/>
      <Map lngg={loc.lng} latt={loc.lat} />
      </div>
    })}</div>
  )
}

export default Location;
