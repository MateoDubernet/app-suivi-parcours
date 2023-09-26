"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [Password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => setShow(!show);
  const handlechange = (e: any) => {
    setPassword(e.target.value);
  };
  const handleEmail = () => (e: any) => {
    setEmail(e.target.value);
  };
  console.log(Password);
  const handdleRedirection = () => {
    router.push("/dashboard");
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
          <Text w={"full"}>Identifiant</Text>
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
          <Text w={"full"}>MDP</Text>
          <InputGroup>
            <Input
              variant={"unstyled"}
              rounded={"none"}
              border={"none"}
              borderBottom={"2px"}
              borderColor={"#ec7402"}
              onChange={handlechange}
              type={show ? "text" : "password"}
            ></Input>
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
            onClick={handdleRedirection}
            rounded={"full"}
          >
            Me conecter
          </Button>
        </VStack>
      </VStack>
    </Flex>
  );
}
