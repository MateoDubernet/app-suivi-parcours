"use client";
import { Button } from '@chakra-ui/react'
import React from 'react'

function Profile() {
  const userApiUrl = 'http://localhost:3000'

  // const handleModif = () => {
  //   const requestData = {
  //     firstname: 'test2',
  //     lastname: 'test2',
  //     password: 'test2',
  //     email: 'test4@test4', 
  //     phoneNumber: '0309569547',
  //     address: '2 rue des test2',
  //   }
  
  //   fetch(`${userApiUrl}/itineraire/user/update/8`, {
  //     method: "PUT",
  //     body: JSON.stringify(requestData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //   .then((res) => {
  //     if (res.status !== 200) {
  //       res.text().then((text) => {
  //         alert(`Erreur ${res.status}: ${text}`);
  //       });
  //     }
  //   })
  //   .catch(function (err) {
  //     console.log("Une erreur s'est produite !", err);
  //   });
  // };

  return (
    <>
      <div>Profile</div>

      {/* <Button
      variant={"unstyled"}
      mt={5}
      color={"white"}
      width={"full"}
      backgroundColor={"#ec7402"}
      onClick={handleModif}
      rounded={"full"}>
          Modifier
      </Button> */}
    </>
  )
}

export default Profile
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
    </Box >
      {/* <Button
      variant={"unstyled"}
      mt={5}
      color={"white"}
      width={"full"}
      backgroundColor={"#ec7402"}
      onClick={handleModif}
      rounded={"full"}>
          Modifier
      </Button> */}
  );
};


export default protectRoute(Profile);
