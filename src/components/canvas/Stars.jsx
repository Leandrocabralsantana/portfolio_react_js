import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(10000), { radius: 0.8 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / -10;
    ref.current.rotation.x -= delta / -10;
  });
  return (
    <group rotation={[0, 0, Math.PI / -10]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#00FFFF"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="w-full h-auto absolute inset-0 z-[0]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>{!isMobile && <Stars />}</Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
