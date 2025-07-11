import { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useLoader, Canvas, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Experience() {
  const model = useLoader(GLTFLoader, "./burger.glb", (loader) => {
    console.log("ура");
  });
  console.log(model);
  const ref = useRef();
  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh castShadow position-x={-2} scale={1.5}>
        <sphereGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <mesh castShadow position-x={2}>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh
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
      </mesh>

      <primitive object={model.scene} scale={0.45} position-z={-2} />


      
    </>
  );
}
