'use client';
import Map from '@/component/atoms/windows'
import { Button, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import React, {  useState } from 'react'
import style from '../../app/page.module.css';
import { protectRoute } from '@/component/atoms/protectRoute';
import Cookies from 'js-cookie';

export default protectRoute(function Dashboard() {

  const router = useRouter();
  const handdleRedirection = (route: string) => {
    Cookies.remove('user')
    router.push(`${route}`);
  };

  const handleProfil = (route: string) => {
    router.push(`${route}`)
  }
  return (
    <>
      <nav className={style.navbar}>
        <div className={style.title}>
          <Heading>Dashboard</Heading>
        </div>
        <Button
           className={style.disconnect}
          variant={"unstyled"}
          color={"white"}
          backgroundColor={"#ec7402"}
          onClick={() => handleProfil("/profile")}
          rounded={"full"}>
          Mon profil
        </Button>
        <Button
          className={style.disconnect}
          variant={"unstyled"}
          color={"white"}
          backgroundColor={"#ec7402"}
          onClick={() => handdleRedirection("/login")}
          rounded={"full"}>
          Déconnexion
        </Button>
      </nav>
      
      <Map />
    </>
  )
})
