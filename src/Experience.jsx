import {  useRef } from "react"
import { OrbitControls, Html, Text, Float, MeshReflectorMaterial, useHelper, BakeShadows, SoftShadows, AccumulativeShadows, RandomizedLight, ContactShadows, Sky, Environment, Lightformer } from '@react-three/drei'
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

    // const { envMapIntensity } = useControls("environment", {
    //   envMapIntensity: { value: 3.5, min: 0, max: 10 },
    // });

    const {envMapIntensity, envMapHeight, envMapRadius, envMapScale} = useControls("environment map", 
    {
        envMapIntensity: {value: 7, min: 0, max: 12},
        envMapHeight: {value: 7, min: 0, max: 100},
        envMapRadius: {value: 28, min: 0, max: 1000},
        envMapScale: {value: 100, min: 10, max: 1000},
      
    })


    return (
      <>
        <Environment
          background
          files={"./hdr/the_sky_is_on_fire_2k.hdr"}
          ground={
            {
              height: envMapHeight,
              radius: envMapRadius,
              scale: envMapScale
            }
          }
        >
          {/* <color args={["#746cff"]} attach="background"/>

          <Lightformer position-z={-5}
            scale={3}
            intensity={100}
            color='red'
            form="ring"
          {/* /> */}


          {/* <mesh position-z={-5} scale={10}>
            <planeGeometry />
            <meshBasicMaterial color={[100,0,0]} />
          </mesh> */}
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

          <mesh
            ref={cubeRef}
            castShadow
            position={[2, 1, -10]}
            scale={1.5}
            visible={true}
          >
            <boxGeometry />
            <meshStandardMaterial
              wireframe={false}
              envMapIntensity={envMapIntensity}
            />
          </mesh>


          <mesh ref={spherepRef} castShadow position-x={-5} position-z={-5} scale={1.5} position-y={1}>
            <sphereGeometry />
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

      </>
    );
}