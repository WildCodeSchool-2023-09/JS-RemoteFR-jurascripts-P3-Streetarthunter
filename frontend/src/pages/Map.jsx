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
  const [userLogged, setUserLogged] = useState(false);

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

  const handleClick = () => {
    setUserLogged(true);
  };

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
          {userLogged ? (
            <>
              <h2 className="add-h2">Ajouter une oeuvre</h2>
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
                        Descritpion de l'oeuvre{" "}
                        <span className="cyan-span">*</span>
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
              <button type="button" className="sub-button">
                Soumettre
              </button>
            </>
          ) : (
            <button type="button" onClick={handleClick} className="reg-button">
              S'inscrire pour jouer
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Map;
