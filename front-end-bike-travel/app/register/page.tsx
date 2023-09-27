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
    setEmail(email);
  };

  const handlePhone = (phone: string) => {
    setPhoneNumber(phone.toString());
  };

  const handleAdress = (adress: string) => {
    setAdress(adress);
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
    bg={"#0b5a6e"}>

      <VStack
      w={"31.375rem"}
      h={"36.375rem"}
      rounded={"xl"}
      spacing={"6rem"}
      bg={"white"}>

        <VStack
        w={"19rem"}
        h={"36.375rem"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}>

          <Text color={'black'} w={"full"}>Email</Text>
          <InputGroup color={'black'}>
            <Input
            required
            type="email"
            rounded={"none"}
            border={"none"}
            variant={"unstyled"}
            borderBottom={"2px"}
            borderColor={"#ec7402"}
            onChange={(e) => handleEmail(e.target.value)}>
            </Input>
          </InputGroup>

          <Text color={'black'} w={"full"}>Nom</Text>
          <InputGroup color={'black'}>
            <Input
            required
            rounded={"none"}
            border={"none"}
            variant={"unstyled"}
            borderBottom={"2px"}
            borderColor={"#ec7402"}
            onChange={(e) => handleLastname(e.target.value)}>
            </Input>
          </InputGroup>

          <Text color={'black'} w={"full"}>Prenom</Text>
          <InputGroup color={'black'}>
            <Input
            required
            variant={"unstyled"}
            rounded={"none"}
            border={"none"}
            borderBottom={"2px"}
            borderColor={"#ec7402"}
            onChange={(e) => handleFirstname(e.target.value)}>
            </Input>
          </InputGroup>

          <Text color={'black'} w={"full"}>Mot de passe</Text>
          <InputGroup color={'black'}>
            <Input
            required
            variant={"unstyled"}
            rounded={"none"}
            border={"none"}
            borderBottom={"2px"}
            borderColor={"#ec7402"}
            onChange={(e) => handlePassword(e.target.value)}
            type={show ? "text" : "password"}>
            </Input>

            <InputRightElement width="4.5rem" pb={"3rem"}>
              <Button size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Text color={'black'} w={"full"}>Numéro de télephone</Text>
          <InputGroup color={'black'}>
            <Input
            required
            rounded={"none"}
            type="number"
            border={"none"}
            variant={"unstyled"}
            borderBottom={"2px"}
            borderColor={"#ec7402"}
            onChange={(e) => handlePhone(e.target.value)}>
            </Input>
          </InputGroup>

          <Text color={'black'} w={"full"}>Adresse</Text>
          <InputGroup color={'black'}>
            <Input
            required
            rounded={"none"}
            border={"none"}
            variant={"unstyled"}
            borderBottom={"2px"}
            borderColor={"#ec7402"}
            onChange={(e) => handleAdress(e.target.value)}>
            </Input>
          </InputGroup>

          <Button
          variant={"unstyled"}
          mt={5}
          color={"white"}
          width={"full"}
          backgroundColor={"#ec7402"}
          onClick={() => handdleRedirection("/dashboard")}
          rounded={"full"}>
            Valider
          </Button>

          <Button
          variant={"unstyled"}
          mt={5}
          color={"white"}
          width={"full"}
          backgroundColor={"#ec7402"}
          onClick={() => handdleRedirection("/login")}
          rounded={"full"}>
            Me connecter
          </Button>
        </VStack>
      </VStack>
    </Flex>
  );
}

export default Register;
