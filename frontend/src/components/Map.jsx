import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.locatecontrol"; // Import plugin
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css"; // Import styles
import L from "leaflet"; // Import L from leaflet to start using the plugin
import { useMediaQuery } from "@react-hook/media-query";
import "./Map.scss";

function Map() {
  const ZOOM_LEVEL = 11;
  const mapRef = useRef();
  const isMobile = useMediaQuery("only screen and (max-width: 600px)");
  L.control.locate().addTo();

  return (
    <div>
      {isMobile ? (
        <>
          <h1>LOGO</h1>
          <MapContainer
            center={[48.8566, 2.3522]}
            zoom={ZOOM_LEVEL}
            ref={mapRef}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </MapContainer>
          <h1>NavBar</h1>
        </>
      ) : (
        <>
          <h1>NavBar</h1>
          <MapContainer
            center={[48.8566, 2.3522]}
            zoom={ZOOM_LEVEL}
            ref={mapRef}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
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
