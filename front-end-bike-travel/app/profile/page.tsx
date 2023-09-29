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