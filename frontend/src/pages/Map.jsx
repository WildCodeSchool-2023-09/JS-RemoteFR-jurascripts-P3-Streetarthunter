import { useRef, useState, useEffect, useContext } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import axios from "axios";
import L from "leaflet";
import { AuthContext } from "../context/AuthContext";
import "leaflet/dist/leaflet.css";
import "leaflet.locatecontrol";
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css";
import "./Map.scss";
import MarkerSVG from "../assets/Map-Pin.svg";
import UserSVG from "../assets/User-Pin.svg";
import MapForm from "../components/MapForm";
import InfoStreetArt from "../components/InfoStreetArt";

function Map() {
  const ZOOM_LEVEL = 11;
  const mapRef = useRef();
  const isMobile = useMediaQuery("only screen and (max-width: 600px)");
  const [latitude, setLatitude] = useState(50.6942); // Latitude de Roubaix
  const [longitude, setLongitude] = useState(3.1746); // Longitude de Roubaix
  const [markers, setMarkers] = useState([]);
  const [markerInfo, setMarkerInfo] = useState({});
  const [userLocation, setUserLocation] = useState(null);
  const { user, handleAuth } = useContext(AuthContext);
  console.info(user.is_administrator);
  // Marqueur carte
  const customMarkerIcon = new L.DivIcon({
    className: "custom-marker",
    html: `<img src="${MarkerSVG}" width="30" height="30" alt="Custom Marker" class="map-marker" />`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const customUserPin = new L.DivIcon({
    className: "user-marker",
    html: `<img src="${UserSVG}" width="35" height="35" alt="User Marker" class="map-marker" />`,
    iconSize: [35, 35],
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

  // Appel le AuthContext pour savoir si un utilisateur est connecté
  useEffect(() => {
    handleAuth();
  }, []);

  // logique de géolocalisation
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setUserLocation([position.coords.latitude, position.coords.longitude]);
        // console.info(position);
      },
      (error) => {
        console.error("Erreur lors de la récupération de la position:", error);
      }
    );
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([latitude, longitude], ZOOM_LEVEL);
    }
  }, [latitude, longitude]);

  // Fetch de la localisation des marqueurs et de leurs infos
  const fetchMarkerData = async () => {
    try {
      const [locationsResponse, artworksResponse] = await Promise.all([
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/locations`),
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/artworks`),
      ]);

      const locations = locationsResponse.data;
      const artworks = artworksResponse.data;

      setMarkers(locations);

      const newMarkerInfo = {};

      locations.forEach((location) => {
        const artwork = artworks.find((art) => art.location_id === location.id);

        if (artwork && artwork.artist) {
          newMarkerInfo[location.id] = {
            streetArtInfo: {
              title: artwork.title || "N/A",
              description: artwork.description || "N/A",
              picture: artwork.picture || "N/A",
            },
            artistInfo: {
              name: artwork.artist.name || "N/A",
              bio: artwork.artist.bio || "N/A",
            },
          };
        }
      });

      setMarkerInfo(newMarkerInfo);
    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
    }
  };

  // Gestion de l'affichage des infos au clic
  const handleMarkerClick = (marker) => {
    const markerId = marker.id;

    if (!markerInfo[markerId]) {
      axios
        .get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/artworks?location_id=${markerId}`
        )
        .then((artworksResponse) => {
          const artworkData = artworksResponse.data[0];

          setMarkerInfo((prevInfo) => ({
            ...prevInfo,
            [markerId]: {
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
                [markerId]: {
                  ...prevInfo[markerId],
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
    fetchMarkerData();
  }, []);

  return (
    <div>
      {isMobile ? (
        <>
          <MapContainer
            center={[latitude, longitude]}
            zoom={ZOOM_LEVEL}
            ref={mapRef}
            className="map-container"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {userLocation && (
              <Marker position={userLocation} icon={customUserPin}>
                <Popup>Votre position actuelle</Popup>
              </Marker>
            )}
            {user.is_administrator === 1 || user.is_administrator === 0
              ? markers.map((marker) => (
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
                ))
              : null}
          </MapContainer>
          <MapForm artistInfo={markerInfo.artistInfo} />
        </>
      ) : (
        // Le reste du code pour les écrans non mobiles
        <>
          <MapContainer
            center={[latitude, longitude]}
            zoom={ZOOM_LEVEL}
            ref={mapRef}
            className="map-container"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {userLocation && (
              <Marker position={userLocation} icon={customUserPin}>
                <Popup className="user-location">Votre position actuelle</Popup>
              </Marker>
            )}
            {user.is_administrator === 1 || user.is_administrator === 0
              ? markers.map((marker) => (
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
                ))
              : null}
          </MapContainer>
          <MapForm artistInfo={markerInfo.artistInfo} />
        </>
      )}
    </div>
  );
}

export default Map;
