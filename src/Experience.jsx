import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Model from "./Model";
import { Suspense } from "react";
import PlaceHolder from "./PlaceHolder";
export default function Experience() {


  return (
    <>
      {/* <Perf position="top-left" /> */}
      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={5.5} />
      <ambientLight intensity={0.5} />

      {/* <mesh castShadow position-x={-2} scale={1.5}>
        <sphereGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh> */}
      {/* <mesh castShadow position-x={2}>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh> */}

      {/* <mesh
        receiveShadow
        rotation-x={-Math.PI * 0.3}
        position-y={-1.5}
        position-x={0}
        position-z={-3.5}
        scale={12}
        doubleSide
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" side={THREE.DoubleSide} />
      </mesh> */}

      <Suspense
        fallback={
          <PlaceHolder position-x={0.1}/>
        }
      >
        <Model />
      </Suspense>
    </>
  );
}
