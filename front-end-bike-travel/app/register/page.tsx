"use client";
import { Input, InputGroup, Flex, VStack, Text, InputRightElement, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Register() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [fristname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [Password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [adress, setAdress] = useState("");

  const handleFirstname = (e: any) => {
    setFirstname(e.target.value);
  };

  const handleLastname = (e: any) => {
    setLastname(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e: any) => {
    setPhoneNumber(e.target.value);
  };

  const handleAdress = (e: any) => {
    setAdress(e.target.value);
  };

  const handdleRedirection = (route: string) => {
    router.push(`${route}`);
  };

  return (
    <Flex
      minH={"100vh"}
      backgroundColor={"white"}
      align={"center"}
      justify={"center"}
      bg={"#0b5a6e"}
    >
      <VStack
        w={"31.375rem"}
        h={"36.375rem"}
        rounded={"xl"}
        spacing={"6rem"}
        bg={"white"}
      >
        <VStack
          w={"19rem"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text w={"full"}>Email</Text>
          <InputGroup>
            <Input
              rounded={"none"}
              border={"none"}
              variant={"unstyled"}
              borderBottom={"2px"}
              borderColor={"#ec7402"}
              onChange={handleEmail}
            ></Input>
          </InputGroup>
          <Text w={"full"}>Prenom</Text>
          <InputGroup>
            <Input
              variant={"unstyled"}
              rounded={"none"}
              border={"none"}
              borderBottom={"2px"}
              borderColor={"#ec7402"}
              onChange={handleFirstname}
            ></Input>
          </InputGroup>
          <Text w={"full"}>Nom</Text>
          <InputGroup>
            <Input
              rounded={"none"}
              border={"none"}
              variant={"unstyled"}
              borderBottom={"2px"}
              borderColor={"#ec7402"}
              onChange={handleLastname}
            ></Input>
          </InputGroup>
          <Text w={"full"}>Mot de passe</Text>
          <InputGroup>
            <Input
              variant={"unstyled"}
              rounded={"none"}
              border={"none"}
              borderBottom={"2px"}
              borderColor={"#ec7402"}
              onChange={handlePassword}
              type={show ? "text" : "password"}
            ></Input>
            <InputRightElement width="4.5rem" pb={"3rem"}>
              <Button size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Text w={"full"}>Numéro de télephone</Text>
          <InputGroup>
            <Input
              rounded={"none"}
              border={"none"}
              variant={"unstyled"}
              borderBottom={"2px"}
              borderColor={"#ec7402"}
              onChange={handlePhone}
            ></Input>
          </InputGroup>
          <Text w={"full"}>Adresse</Text>
          <InputGroup>
            <Input
              rounded={"none"}
              border={"none"}
              variant={"unstyled"}
              borderBottom={"2px"}
              borderColor={"#ec7402"}
              onChange={handleAdress}
            ></Input>
          </InputGroup>

          <Button
            variant={"unstyled"}
            mt={5}
            color={"white"}
            width={"full"}
            backgroundColor={"#ec7402"}
            onClick={() => handdleRedirection("/dashboard")}
            rounded={"full"}
          >
            Valider
          </Button>

          <Button
            variant={"unstyled"}
            mt={5}
            color={"white"}
            width={"full"}
            backgroundColor={"#ec7402"}
            onClick={() => handdleRedirection("/login")}
            rounded={"full"}
          >
            Me connecter
          </Button>
        </VStack>
      </VStack>
    </Flex>
  );
}

export default Register;
