'use client';
import Map from '@/component/atoms/windows'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function dashboard() {

  const router = useRouter();
  const handdleRedirection = (route: string) => {
    router.push(`${route}`);
  };

  return (
    <>
      <div>dashboard</div>
      <Button
            variant={"unstyled"}
            mt={5}
            color={"white"}
            width={"full"}
            backgroundColor={"#ec7402"}
            onClick={() => handdleRedirection("/login")}
            rounded={"full"}>
            Déconnexion
      </Button>
      <Map />
    </>
  )
}
