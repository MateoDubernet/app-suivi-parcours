'use client';
import Map from '@/component/atoms/windows'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { protectRoute } from '@/component/atoms/protectRoute';
import Cookies from 'js-cookie';

export default protectRoute(function Dashboard() {

  const router = useRouter();
  const handdleRedirection = (route: string) => {
    Cookies.remove('user')
    router.push(`${route}`);
  };

  const [user , setUser] = useState(0)

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
})
