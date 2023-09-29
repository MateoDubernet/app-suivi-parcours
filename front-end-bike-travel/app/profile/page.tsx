// Importations nécessaires
'use client'
import { protectRoute } from '@/component/atoms/protectRoute'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { Box, Button, Input, Text } from '@chakra-ui/react'

// Composant de la page de profil
const Profile = () => {
  const userApiUrl = 'http://localhost:3000/itineraire';
  const [user, setUser] = useState<{
    id: string,
    email: string,
    prenom: string,
    nom: string,
    password: string,
    address: string,
    phone_number: string
  } | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    const email = Cookies.get('user');

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
              setUser(userData);
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
    <Box h={"100vh"}>
      <Text fontSize="2xl">Profil de l'utilisateur</Text>
      {user ? (
        <Box>
          {isEditing ? (
            <Box>
              <Input type="text" defaultValue={user.prenom} />
              <Input type="text" defaultValue={user.nom} />
              <Input type="text" defaultValue={user.email} />
              <Input type="text" defaultValue={user.address} />
              <Input type="text" defaultValue={user.phone_number} />
              {/* Ajoutez d'autres champs d'entrée pour les détails de l'utilisateur */}
            </Box>
          ) : (
            <Box>
              <Text>Nom : {user.prenom} {user.nom}</Text>
              <Text>Email : {user.email}</Text>
              <Text>Adresse : {user.address}</Text>
              <Text>Numéro de téléphone : {user.phone_number}</Text>
              {/* Ajoutez d'autres détails de l'utilisateur en mode lecture seule */}
            </Box>
          )}
          <Button onClick={toggleEditing}>
            {isEditing ? 'Enregistrer' : 'Modifier'}
          </Button>
        </Box>
      ) : (
        <Text>Chargement en cours...</Text>
      )}
    </Box>
  );
};


export default protectRoute(Profile);
