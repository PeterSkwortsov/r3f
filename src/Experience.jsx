import {
  OrbitControls,
  Text3D,
  useMatcapTexture,
  Center,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useState } from "react";

export default function Experience() {

  // const [matcapTexture] = useMatcapTexture("7B5254_E9DCC7_B19986_C8AC91", 256);
  // console.log(matcapTexture)
  const tempArray = [...Array(100)];
  const [torusGeometry, setTorusGeometry] = useState();
  


  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />

      <torusGeometry ref={setTorusGeometry} args={[1, 0.6, 16, 32]} />

      {/* <ambientLight intensity={0.5} /> */}
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <directionalLight position={[-1, -2, -3]} intensity={1.5} />

      <Center>
        <Text3D
          font="./Nunito ExtraLight_Italic.json"
          size={1.75}
          // depth={1}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.05}
          bevelOffset={0.02}
          bevelSegments={12}
        >
          Привет мир!
          <meshStandardMaterial color="green" />
        </Text3D>
        {tempArray.map((value, index) => (
          <mesh
            geometry={torusGeometry}
            key={index}
            position={[
              (Math.random() - 0.15) * 20,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
            ]}
            scale={0.2 + Math.random() * 0.2}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          >
            <meshStandardMaterial color="orange" />
          </mesh>
        ))}
      </Center>
    </>
  );
}
