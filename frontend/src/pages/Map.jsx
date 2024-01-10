import { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import "leaflet.locatecontrol";
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css";
import "./Map.scss";
import NavBar from "../components/NavBar";
import MarkerSVG from "../assets/Map-Pin.svg";

function Map() {
  const ZOOM_LEVEL = 11;
  const mapRef = useRef();
  const isMobile = useMediaQuery("only screen and (max-width: 600px)");
  const [latitude, setLatitude] = useState(50.6942); // Latitude de Roubaix
  const [longitude, setLongitude] = useState(3.1746); // Longitude de Roubaix
  const [markers, setMarkers] = useState([]);

  // Marqueur

  const customMarkerIcon = new L.DivIcon({
    className: "custom-marker",
    html: `<img src="${MarkerSVG}" width="30" height="30" alt="Custom Marker" class="map-marker" />`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  // Appel du backend

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/locations`)
      .then((response) => {
        setMarkers(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des marqueurs:", error);
      });
  }, []);

  // logique geolocalisation

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.info(position);
    });
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([latitude, longitude], ZOOM_LEVEL);
    }
  }, [latitude, longitude]);

  return (
    <div>
      {isMobile ? (
        <>
          <NavBar />
          <MapContainer
            center={[latitude, longitude]}
            zoom={ZOOM_LEVEL}
            ref={mapRef}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map((marker) => (
              <Marker
                key={marker.id}
                position={[marker.latitude, marker.longitude]}
                icon={customMarkerIcon}
              />
            ))}
          </MapContainer>
        </>
      ) : (
        <>
          <NavBar />
          <MapContainer
            center={[latitude, longitude]}
            zoom={ZOOM_LEVEL}
            ref={mapRef}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map((marker) => (
              <Marker
                key={marker.id}
                position={[marker.latitude, marker.longitude]}
                icon={customMarkerIcon}
              />
            ))}
          </MapContainer>
          <h2>Ajouter une oeuvre</h2>
          <p>Télécharger ma photo</p>
          <section>
            <p>Nom de l'artiste</p>
            <input />
            <p>Nom de l'oeuvre</p>
            <input />
            <p>Adresse</p>
            <input />
            <p>Ville</p>
            <input />
            <p>Descritpion de l'oeuvre</p>
            <input />
            <p>A propos de l'artiste (bonus)</p>
            <input />
            <button type="button">Soumettre</button>
          </section>
        </>
      )}
    </div>
  );
}

export default Map;
