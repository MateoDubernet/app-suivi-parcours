import React from 'react'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../templates/maps'), {
  ssr:false
})

export default Map
