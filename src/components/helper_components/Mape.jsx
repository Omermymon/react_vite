import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  useEffect(() => {
    // Ensure that the map container is initialized only once
    const mapContainer = document.getElementById("map");
    if (mapContainer._leaflet_id) return; // If the map is already initialized, do nothing

    // Initialize the map
    const map = L.map("map").setView([51.505, -0.09], 13); // Initial coordinates (London)

    // Add tile layer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add marker
    L.marker([51.505, -0.09])
      .addTo(map)
      .bindPopup("A simple marker")
      .openPopup();

    return () => {
      // Cleanup map instance when component unmounts
      map.remove();
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
};

export default MapComponent;
