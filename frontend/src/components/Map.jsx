import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.locatecontrol"; // Import plugin
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css"; // Import styles
import "./Map.scss";

function Map() {
  const ZOOM_LEVEL = 11;
  const mapRef = useRef();

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={ZOOM_LEVEL} ref={mapRef}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default Map;
