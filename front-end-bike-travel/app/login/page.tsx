"use client";
import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const userApiUrl = 'http://localhost:4000/user'
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => setShow(!show);

  const handlePassword = (password: string) => {
    setPassword(password);
    console.log("Mot de passe :", password);
  };
  const handleEmail = (email: string) => {
    setEmail(email);
    console.log("Email :", email);
  };

  const handleLogin = (route: string) => {
    fetch(`${userApiUrl}/connexion`, {
      method: "POST",
      body: JSON.stringify({'email': email, 'password': password}),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.text())
    .then(text => {
        console.log(text);
    })
    .catch(function(err) {
      console.log("Something went wrong!", err);
    });
    // router.push(`${route}`);
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

                <Text w={"full"} color={'black'}>Email</Text>
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

                <Text w={"full"} color={'black'}>Mot de passe</Text>
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

                <Button
                variant={"unstyled"}
                mt={5}
                color={"white"}
                width={"full"}
                backgroundColor={"#ec7402"}
                onClick={() => handleLogin("/dashboard")}
                rounded={"full"}>
                    Connexion
                </Button>

                <Button
                variant={"unstyled"}
                mt={5}
                color={"white"}
                width={"full"}
                backgroundColor={"#ec7402"}
                onClick={() => handleLogin("/register")}
                rounded={"full"}>
                    M'inscrire
                </Button>
            </VStack>
        </VStack>
    </Flex>
  );
}
