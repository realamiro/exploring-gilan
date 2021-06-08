import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import './Map.css';

mapboxgl.accessToken =
  "pk.eyJ1IjoiaW1rYXJpbWthcmltIiwiYSI6ImNrcG45czQ3dTA5eXUydW51cnZzdzU0YWUifQ.DZLQeQhqY19sqY6Ii1jgDA";

function Map({lngg,latt}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(lngg);
  const [lat, setLat] = useState(latt);
  const [zoom, setZoom] = useState(13);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default Map;
