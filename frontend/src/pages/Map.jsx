import { useRef, useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.locatecontrol"; // Import plugin
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css"; // Import styles
import { useMediaQuery } from "@react-hook/media-query";
import "./Map.scss";

function Map() {
  const ZOOM_LEVEL = 11;
  const mapRef = useRef();
  const isMobile = useMediaQuery("only screen and (max-width: 600px)");
  const [latitude, setLatitude] = useState("48.866667");
  const [longitude, setLongitude] = useState("2.3333");

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
          <h1>LOGO</h1>
          {latitude !== 48.866667 ? (
            <MapContainer
              center={[latitude, longitude]}
              zoom={ZOOM_LEVEL}
              ref={mapRef}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
            </MapContainer>
          ) : (
            <MapContainer
              center={[latitude, longitude]}
              zoom={ZOOM_LEVEL}
              ref={mapRef}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
            </MapContainer>
          )}
          <h1>NavBar</h1>
        </>
      ) : (
        <>
          <h1>NavBar</h1>
          {latitude !== 48.866667 ? (
            <MapContainer
              center={[latitude, longitude]}
              zoom={ZOOM_LEVEL}
              ref={mapRef}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
            </MapContainer>
          ) : (
            <MapContainer
              center={[48.8666, 2.3333]}
              zoom={ZOOM_LEVEL}
              ref={mapRef}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
            </MapContainer>
          )}
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
