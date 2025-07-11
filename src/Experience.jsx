import { OrbitControls, MeshReflectorMaterial } from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Model from "./Model";
import { Suspense } from "react";
import PlaceHolder from "./PlaceHolder";
import Hamburger from "./Hamburger";

export default function Experience() {


  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={2.5} shadow-normalBias={0.04} />
      <ambientLight intensity={0.5} />

     

      <Suspense fallback={<PlaceHolder position-x={0.1} />}>
        <Hamburger position-y={-2} />
      </Suspense>

      <mesh
        rotation-x={-Math.PI / 2}
        position={[0, -1.53, 0]}
        scale={28.5}
        receiveShadow
      >
        <planeGeometry position={[0, -0.2, 0]} />
        <meshStandardMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.7}
          color="orange"
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}
