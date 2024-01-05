import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.scss";

function Map() {
  const ZOOM_LEVEL = 9;
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
