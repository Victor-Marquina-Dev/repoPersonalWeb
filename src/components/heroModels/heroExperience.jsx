import { OrbitControls } from '@react-three/drei';
import {Canvas} from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import {Room} from './Room.jsx'
import { HeroLights } from './HeroLights.jsx';
import { Modelo } from './Computer.jsx';
import { Laptop } from './3d_clipart_webdev.jsx';
import Particles from "./Particles";



const HeroExperience = () => {
    const isTablet = useMediaQuery({query: '(max-with: 1024px)'});
    const isMobile = useMediaQuery({query: '(max-with: 768px)'});
  return (
    <Canvas camera={{ position: [-35, 35, 105], fov: 20 }}>

        <OrbitControls
            enablePan={false}
            enableZoom ={!isTablet}
            maxDistance={25}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
        />

        <HeroLights/>

        <Particles count ={100}/>

    <group
        scale={isMobile? 0.7 :1}
        position={[0,-1.90,0.1]}
        rotation={[0, -Math.PI / 4,0]}        
    >
   
<Laptop/>
      </group>
    
    </Canvas>

  )
}

export default HeroExperience