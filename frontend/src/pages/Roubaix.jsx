import React, { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import "leaflet.locatecontrol";
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css";
import "./Map.scss";
import MarkerSVG from "../assets/Map-Pin.svg";
import InfoStreetArt from "../components/InfoStreetArt";

function Roubaix() {
  const ZOOM_LEVEL = 11;
  const mapRef = useRef();
  const isMobile = useMediaQuery("only screen and (max-width: 600px)");
  const [latitude, setLatitude] = useState(50.6942);
  const [longitude, setLongitude] = useState(3.1746);
  const [markers, setMarkers] = useState([]);
  const [markerInfo, setMarkerInfo] = useState({});

  const customMarkerIcon = new L.DivIcon({
    className: "custom-marker",
    html: `<img src="${MarkerSVG}" width="30" height="30" alt="Custom Marker" class="map-marker" />`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const handleMarkerClick = (marker) => {
    // Vérifiez si les informations spécifiques à ce marqueur sont déjà stockées
    if (!markerInfo[marker.id]) {
      axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/api/artworks?location_id=${
            marker.id
          }`
        )
        .then((artworksResponse) => {
          const artworkData = artworksResponse.data[0];

          setMarkerInfo((prevInfo) => ({
            ...prevInfo,
            [marker.id]: {
              streetArtInfo: {
                title: artworkData.title,
                description: artworkData.description,
                picture: artworkData.picture,
              },
            },
          }));

          axios
            .get(
              `${import.meta.env.VITE_BACKEND_URL}/api/artists/${
                artworkData.artist_id
              }`
            )
            .then((artistResponse) => {
              const artistData = artistResponse.data;

              setMarkerInfo((prevInfo) => ({
                ...prevInfo,
                [marker.id]: {
                  ...prevInfo[marker.id],
                  artistInfo: {
                    name: artistData.name,
                    bio: artistData.bio,
                  },
                },
              }));
            })
            .catch((error) => {
              console.error(
                "Erreur lors de la récupération des données artiste:",
                error
              );
            });
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération des données artwork:",
            error
          );
        });
    }
  };

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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.info(position);
    });
  }, []);

  return (
    <div>
      {isMobile ? (
        <div>
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
        </div>
      ) : (
        <div>
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
                eventHandlers={{
                  click: () => handleMarkerClick(marker),
                }}
              >
                <Popup>
                  <InfoStreetArt
                    streetArtInfo={markerInfo[marker.id]?.streetArtInfo}
                    artistInfo={markerInfo[marker.id]?.artistInfo}
                  />
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}
    </div>
  );
}

export default Roubaix;
