'use client';
import Map from '@/component/atoms/windows'
import { Button, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
import React from 'react'
import style from '../../app/page.module.css';

export default function dashboard() {

  const router = useRouter();
  const handdleRedirection = (route: string) => {
    router.push(`${route}`);
  };

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
          onClick={() => handdleRedirection("/login")}
          rounded={"full"}>
          Déconnexion
        </Button>
      </nav>
      
      <Map />
    </>
  )
}
