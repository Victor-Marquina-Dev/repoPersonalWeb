import React from 'react'
import * as THREE from 'three'

export const HeroLights = () => {
  return (
    <>
    <spotLight
        position={[2,5,6]}
        angle={1.3}
        intensity={10}
        penumbra={0.15}
        color='white'
    />

    <spotLight
        position={[-3,5,5]}
        angle={1.4}
        intensity={200}
        penumbra={0.1}
        color='#9ba8ab'
    />

    <primitive
        object={new THREE.RectAreaLight('#11212D')}
        position={[0,-1,1]}
        intensity = {3}
        penumbra={1}
        rotation={[-Math.PI/4, Math.PI/4,0]} 
    />



    </>
  )
}
 