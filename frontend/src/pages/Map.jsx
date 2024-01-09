import { useRef, useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.locatecontrol"; // Import plugin
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css"; // Import styles
import { useMediaQuery } from "@react-hook/media-query";
import "./Map.scss";
import NavBar from "../components/NavBar";

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
          <NavBar />
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
        </>
      ) : (
        <>
          <NavBar />
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
          <p>Logo de Téléchargement</p>
          <p>Télécharger ma photo</p>
          <form className="content">
            <div className="parent-div">
              <div>
                <div className="align-div">
                  <p>
                    Nom de l'artiste <span className="cyan-span">*</span>
                  </p>
                  <input />
                </div>
                <div className="align-div">
                  <p>Nom de l'oeuvre</p>
                  <input />
                </div>
                <div className="align-div">
                  <p>
                    Adresse <span className="cyan-span">*</span>
                  </p>
                  <input />
                </div>
                <div className="align-div">
                  <p>
                    Ville <span className="cyan-span">*</span>
                  </p>
                  <input />
                </div>
              </div>
              <div>
                <div className="align-div">
                  <p>
                    Descritpion de l'oeuvre <span className="cyan-span">*</span>
                  </p>
                  <input className="desc-inp" />
                </div>
                <div className="align-div">
                  <p>
                    A propos de l'artiste
                    <span className="cyan-span"> (bonus)</span>
                  </p>
                  <input className="about-inp" />
                </div>
              </div>
            </div>
          </form>
          <button type="button">Soumettre</button>
        </>
      )}
    </div>
  );
}

export default Map;
