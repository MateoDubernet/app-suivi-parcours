import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../../app/page.module.css';
import style from '../../app/page.module.css';
import L from 'leaflet';
import { Button } from '@chakra-ui/react';
import Cookies from 'js-cookie';

function Maps() {
  const userApiUrl = 'http://localhost:3000/itineraire'
  const [stationData, setStationData] = useState<any[]>([]);
  const [waypoints, setWaypoints] = useState<any[]>([]);
  const [itinerary, setItinerary] = useState<any[]>([]);
  const [userId, setUserId] = useState<string>('')

  useEffect(() => {
    const getStation = () => {
      const url =
        'https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/velib-disponibilite-en-temps-reel/records?limit=100';

      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setStationData(json.results);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    getStation();
  }, []);

  const addWaypoint = (e: L.LeafletMouseEvent) => {
    const newWaypoint = {
      lat: e.latlng.lat,
      lon: e.latlng.lng,
    };

    if (waypoints.length < 2) {
      setWaypoints([...waypoints, newWaypoint]);
      if (waypoints.length === 1) {
        setItinerary([waypoints[0], newWaypoint]);
      }
    } else {
      // Clear existing waypoints if there are already 2
      setWaypoints([newWaypoint]);
      setItinerary([newWaypoint]);
    }
  };

  const AddItineraire = () => {
  if (itinerary.length === 2) {
    const [point1, point2] = itinerary;

    const requestBody = {
      longitudePoint1: point1.lon,
      latitudePoint1: point1.lat,
      longitudePoint2: point2.lon,
      latitudePoint2: point2.lat,
      userId: userId, // Assurez-vous que userId est défini correctement
    };

    // Effectuer la requête POST
    fetch(`${userApiUrl}/creer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.status === 201) {
          console.log('Itinéraire créé avec succès.');
          // Vous pouvez également effectuer d'autres actions après la création de l'itinéraire
        } else {
          console.error('Erreur lors de la création de l\'itinéraire.');
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la création de l\'itinéraire :', error);
      });
  }
};



   useEffect(() => {
    const email = Cookies.get('user'); // Supprimez le JSON.stringify ici

    if (email) {
      fetch(`${userApiUrl}/user/${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.status === 200) {
            // La requête a réussi, vous pouvez maintenant traiter les données de l'utilisateur
            response.json().then((userData) => {
              console.log('Données de l\'utilisateur récupérées avec succès :', userData);
              setUserId(userData.id)
              // Vous pouvez effectuer d'autres actions avec les données de l'utilisateur ici
            });
          } else {
            console.error('Erreur lors de la récupération des données de l\'utilisateur.');
          }
        })
        .catch((error) => {
          console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
        });
    }
  }, []);



  return (
    <>
    <MapContainer
      className={style.map}
      center={[48.866667, 2.333333]}
      zoom={10}
      scrollWheelZoom={true}
      tap={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {stationData && stationData.length > 0 &&
        stationData.map((station) => (
          <Marker
            icon={L.divIcon({
              iconSize: [20, 20],
              iconAnchor: [20 / 2, 20 + 9],
              className: "mymarker",
              html: "🚲",
            })}
            key={station.stationcode}
            position={[station.coordonnees_geo.lat, station.coordonnees_geo.lon]}
          >
            <Popup>
              <strong>{station.name}</strong>
              <br />
              Capacité : {station.capacity}
              <br />
              Vélos disponibles : {station.numbikesavailable}
            </Popup>
          </Marker>
        ))}

      <ClickHandler addWaypoint={addWaypoint} />

      {/* Render the Polyline for the itinerary */}
      {itinerary.length === 2 && (
        <Polyline
          positions={itinerary.map((point) => [point.lat, point.lon])}
          color="blue"
        />
      )}
    </MapContainer>
    <Button onClick={AddItineraire} ml={'5px'}>
      Enregistrer itineraire
    </Button>
    </>
  );
}

interface ClickHandlerProps {
  addWaypoint: (e: L.LeafletMouseEvent) => void;
}

function ClickHandler({ addWaypoint }: ClickHandlerProps) {
  const map = useMapEvents({
    click: (e: L.LeafletMouseEvent) => {
      addWaypoint(e);
    },
  });

  return null;
}

export default Maps;
