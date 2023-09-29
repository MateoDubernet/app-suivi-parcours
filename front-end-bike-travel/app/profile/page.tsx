"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Box, Text, Input, Button } from "@chakra-ui/react";
import { protectRoute } from "@/component/atoms/protectRoute";
import { useRouter } from "next/navigation";

const Profile = () => {
    const email = Cookies.get("user");
    const router = useRouter()
  const userApiUrl = "http://localhost:3000/itineraire";
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [newEmail, setNewEmail] = useState(email);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAdress] = useState("");
  const [user, setUser] = useState<{
    id: string;
    email: string;
    prenom: string;
    nom: string;
    password: string;
    address: string;
    phone_number: string;
  } | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [data, setData] = useState <{
        map(arg0: (item: any, index: any) => React.JSX.Element): React.ReactNode;
        longitudePoint1: Number;
        latitudePoint1: Number,
        longitudePoint2: Number,
        latitudePoint2:Number }>()

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleFirstname = (firstname: string) => {
    setFirstname(firstname);
  };

  const handleLastname = (lastname: string) => {
    setLastname(lastname);
  };

  const handlePassword = (password: string) => {
    setPassword(password);
  };

  const handleEmail = (email: string) => {
    setNewEmail(email);
  };

  const handlePhone = (phoneNumber: string) => {
    setPhoneNumber(phoneNumber.toString());
  };

  const handleAdress = (address: string) => {
    setAdress(address);
  };

  useEffect(() => {
    const email = Cookies.get("user");

    if (email) {
      fetch(`${userApiUrl}/user/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 200) {
            // La requête a réussi, vous pouvez maintenant traiter les données de l'utilisateur
            response.json().then((userData) => {
              setUser(userData);
              // Vous pouvez effectuer d'autres actions avec les données de l'utilisateur ici
              setFirstname(userData.prenom);
              setLastname(userData.nom);
              setPassword(userData.password); // Assurez-vous d'ajouter la gestion du mot de passe
              setNewEmail(userData.email);
              setPhoneNumber(userData.phone_number);
              setAdress(userData.address);
            });
          } else {
            console.error(
              "Erreur lors de la récupération des données de l'utilisateur."
            );
          }
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération des données de l'utilisateur :",
            error
          );
        });
    }
  }, []);

const handleModif = () => {
  const requestData = {
    prenom: firstname,
    nom: lastname,
    password: password,
    email: newEmail,
    phoneNumber: phoneNumber,
    address: address,
  };

  fetch(`${userApiUrl}/user/update/${email}`, {
    method: "PUT",
    body: JSON.stringify(requestData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status === 200) {
        // La requête a réussi
        const encodedEmail = encodeURIComponent(requestData.email);
        Cookies.remove('user');
        Cookies.set('user', encodedEmail);
        router.push('/dashboard');
      } else {
        res.text().then((text) => {
          alert(`Erreur ${res.status}: ${text}`);
        });
      }
    })
    .catch(function (err) {
      console.log("Une erreur s'est produite !", err);
    });
};
useEffect(() => {

    if (user) {
      fetch(`${userApiUrl}/tous/${user.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status === 200) {
            // La requête a réussi, vous pouvez maintenant traiter les données de l'utilisateur
            response.json().then((data) => {
              setData(data);
            });
          } else {
            console.error(
              "Erreur lors de la récupération des données itinéraire de l'utilisateur."
            );
          }
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération des données itinéraire de l'utilisateur :",
            error
          );
        });
    }
  }, [user]);
console.log(data)
  return (
    <Box h="100vh">
      <Text fontSize="2xl">Profil de l'utilisateur</Text>
      {user ? (
        <Box>
          {isEditing ? (
            <Box>
              <Text>Prenom</Text>
              <Input
                type="text"
                defaultValue={user.prenom}
                onChange={(e) => handleFirstname(e.target.value)}
              />
              <Text>Nom</Text>
              <Input
                type="text"
                defaultValue={user.nom}
                onChange={(e) => handleLastname(e.target.value)}
              />
              <Text>Email</Text>
              <Input
                type="text"
                defaultValue={user.email}
                onChange={(e) => handleEmail(e.target.value)}
              />
              <Text>Téléphone</Text>
              <Input
                type="text"
                defaultValue={user.address}
                onChange={(e) => handlePhone(e.target.value)}
              />
              <Text>Adresse</Text>
              <Input
                type="text"
                defaultValue={user.phone_number}
                onChange={(e) => handleAdress(e.target.value)}
              />
              <Text>Mot de passe</Text>
              <Input
                type="password"
                defaultValue={user.password}
                onChange={(e) => handlePassword(e.target.value)}
              ></Input>
            </Box>
          ) : (
            <Box>
              <Text>
                Nom : {user.prenom} {user.nom}
              </Text>
              <Text>Email : {user.email}</Text>
              <Text>Adresse : {user.address}</Text>
              <Text>Numéro de téléphone : {user.phone_number}</Text>
              {/* Ajoutez d'autres détails de l'utilisateur en mode lecture seule */}
            </Box>
          )}
          <Button onClick={toggleEditing}>
            {isEditing ? "Enregistrer" : "Modifier"}
          </Button>
        </Box>
      ) : (
        <Text>Chargement en cours...</Text>
      )}
      <Button
        variant="unstyled"
        mt={5}
        color="white"
        width="full"
        backgroundColor="#ec7402"
        onClick={handleModif}
        rounded="full"
      >
        Modifier
          </Button>
    {data ? (
  <Box>
    {data.map((item, index) => (
      <div key={index}>
        <Text>
          Itinéraire {index + 1}:
        </Text>
        <Text>
          Lat : {item.latitudePoint1?.toString()} , Long : {item.longitudePoint1?.toString()}
        </Text>
        <Text>
          Lat : {item.latitudePoint2?.toString()} , Long : {item.longitudePoint2?.toString()}
        </Text>
      </div>
    ))}
  </Box>
) : (
  null
)}

    </Box>
  );
};

export default protectRoute(Profile);
