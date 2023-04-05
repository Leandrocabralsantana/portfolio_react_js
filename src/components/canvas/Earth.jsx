import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import notebook from './backgroundimages/notebook.jpg';

const Earth = ({ isMobile }) => {
  const earth = useGLTF('./planet/scene.gltf')

  return (
    <primitive 
      object={earth.scene}
      scale={isMobile? 0 : 2.5}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:1000px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);    

  return() => {
    mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])
  return(
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
       }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile}/>
        </Suspense>
        <Preload all />
    </Canvas>
  )
}
export default EarthCanvas;