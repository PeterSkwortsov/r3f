import {  useRef } from "react"
import { OrbitControls, Html, Text, Float, MeshReflectorMaterial, useHelper, BakeShadows, SoftShadows, AccumulativeShadows, RandomizedLight, ContactShadows, Sky, Environment } from '@react-three/drei'
import Cube from "./Cube"
import { Perf } from "r3f-perf"
import * as THREE from 'three'
import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"


export default function Experience() {


    const cubeRef = useRef()
    const groupRef = useRef()
    const spherepRef = useRef()
    const planepRef = useRef()

    const directionalLight = useRef()
    const amberLight = useRef()
    // useHelper(amberLight, THREE.PointLightHelper, 0.2, 'yellow')
    // useHelper(directionalLight, THREE.DirectionalLightHelper, 1, 'red')

    useFrame((state, delta) => {
        const time = state.clock.elapsedTime
        cubeRef.current.rotation.y += delta * 0.2
        cubeRef.current.position.x = 2 + Math.sin(time);
    })

    const {color, opacity, blur} = useControls('ContactShadows', {
        color: '#000000',
        opacity: {value: 0.5, min: 0, max: 1},
        blur: {value: 0.5, min: 0, max: 1},
    })

    // const {sunPosition} = useControls('sky', {
    //     sunPosition: {value:[1,2,3]},
    // })

    const { envMapIntensity } = useControls("environment", {
      envMapIntensity: { value: 3.5, min: 0, max: 10 },
    });


    return (
      <>
        <Environment 
        background 
        // files={"./hdr/the_sky_is_on_fire_2k.hdr"}
        >
          <mesh position-z={-5} scale={10}>
            <planeGeometry />
            <meshBasicMaterial color='red'
              />
          </mesh>
        </Environment>

        <BakeShadows />

        <Perf position="top-left" />
        {/* <Sky sunPosition={sunPosition}/> */}
        <OrbitControls makeDefault />
        {/* <AccumulativeShadows
            position={[0, -0.99, 0]}
            scale={25}
            color="#316d39"
            opacity={0.5}
            frames={Infinity}
            temporal
            blend={100}
        > */}

        {/* <RandomizedLight
            amount={8}
            radius={1}
            ambient={0.5}
            intensity={0.5}
            position={[1, 2, 3]}
            bias={0.001}
          /> */}
        {/* </AccumulativeShadows> */}
        <ContactShadows
          position={[0, -1.95, 0]}
          scale={15}
          resolution={512}
          far={5}
          color={color}
          opacity={opacity}
          blur={blur}
        />

        {/* <directionalLight
          ref={directionalLight}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-camera-fov={50}
          shadow-camera-top={5}
          shadow-camera-right={5}
          shadow-camera-bottom={-5}
          shadow-camera-left={-5}
          position={sunPosition}
          intensity={2.5}
        /> */}
        {/* <ambientLight ref={amberLight} intensity={0.02}/> */}

        <group ref={groupRef}>
          <mesh
            ref={cubeRef}
            castShadow
            position={[2, 1, 0]}
            scale={1.5}
            visible={true}
          >
            <boxGeometry />
            <meshStandardMaterial
              color={"blue"}
              wireframe={false}
              envMapIntensity={envMapIntensity}
            />
          </mesh>

          <Cube scale={2} />

          <mesh ref={spherepRef} castShadow position-x={-2} scale={1.5}>
            <sphereGeometry position={[0, -2, 0]} />
            <meshStandardMaterial wireframe={false} color="orange" />
            <Html
              position={[1, 1, 1]}
              wrapperClass="label"
              center
              distanceFactor={6}
              occlude={[cubeRef, spherepRef]}
            >
              Это сфера 👈
            </Html>
          </mesh>
        </group>

        <mesh
          receiveShadow
          rotation-x={-Math.PI / 2}
          ref={planepRef}
          position={[0, -2, 0]}
          scale={15.5}
        >
          <planeGeometry position={[0, -1, 0]} />
          <meshStandardMaterial
            wireframe={false}
            color="greenyellow"
            envMapIntensity={envMapIntensity}
          />

          {/* <MeshReflectorMaterial
            resolution={512}
            blur={[1000, 1000]}
            mixBlur={1}
            mirror={0.7}
            color="white"
          /> */}
        </mesh>

        <Float speed={2} floatIntensity={2}>
          <Text
            // это Troika JS
            color="salmon"
            font="./Nunito-Italic-VariableFont_wght.ttf"
            position={[0, 2, -5]}
            scale={20}
            maxWidth={1}
            textAlign="center"
          >
            Это возможности R3F
          </Text>
        </Float>

        {/* <CustomObject /> */}
      </>
    );
}