import { useRef } from "react"
import { OrbitControls, TransformControls, PivotControls, Html, Text, Float, MeshReflectorMaterial } from '@react-three/drei'

export default function Experience() {

    const cubeRef = useRef()
    const cubeRef2 = useRef()
    const groupRef = useRef()
    const spherepRef = useRef()
    const planepRef = useRef()

    // useFrame((state, delta) => {

    //     const angale = state.clock.elapsedTime * 0.2
    //     state.camera.position.x = (Math.sin(angale * 0.5)) * 8
    //     state.camera.position.z = (Math.cos(angale)) * 8
    //     state.camera.lookAt(0,0,0)

    //     cubeRef.current.rotation.y += delta 
    //     groupRef.current.rotation.y += delta * 0.002
    // })

    return <>
 
    <OrbitControls makeDefault/>

    <directionalLight position={[1,2,3]} intensity={1.5}/>
    <ambientLight intensity={0.5}/>

    <group ref={groupRef}>

        <mesh ref={cubeRef} position-x={2} rotation-y={30.85} 
        scale={1.5}>
            <boxGeometry  />
            <meshStandardMaterial color="blue" 
            wireframe={false}
            />
        </mesh>
            <mesh ref={cubeRef2} position = {[-5,2,1]} 
        scale={1.5}>
            <boxGeometry  />
            <meshStandardMaterial color="blue" 
            wireframe={false}
            />
        </mesh>


            <TransformControls object={cubeRef} mode="translate"/>

            <PivotControls 
            anchor={[0,1,0]}
            depthTest = {false}
            lineWidth={2}
            axisColors={["#FF00FF", "#FF00FF", "#FF00FF"]}
            fixed={true}
            scale={120}
            >
            <mesh ref={spherepRef}  position-x={-2} scale={1.5}>
            <sphereGeometry position={[0, -2, 0]} />
                <meshStandardMaterial
                wireframe={false}
                    color='orange'
                />
            <Html 
            position={[1,1,1]}
            wrapperClass="label"
            center
            distanceFactor={6}
                        occlude={[cubeRef, cubeRef2, spherepRef]}

            >Это сфера 👈</Html>
            </mesh>
        </PivotControls>
        </group>

        <mesh rotation-x={-Math.PI / 2} 
        ref={planepRef} 
        position={[0, -2, 0]} 
        scale={28.5}>
            <planeGeometry position={[0, -2, 0]} />
            {/* <meshStandardMaterial
                wireframe={false}
                color='greenyellow'
            /> */}
           
            <MeshReflectorMaterial 
            resolution={512}
            blur={[1000,1000]}
            mixBlur={1}
            mirror={0.7}
            color='white'
            />
        </mesh>

    <Float
    speed={2}
    floatIntensity={2}
    >
        <Text
        // это Troika JS
        color='salmon'
            font="./Nunito-Italic-VariableFont_wght.ttf"
        position={[0, 2,-5]}
        scale={20}
        maxWidth={1}
        textAlign="center"
        >
            
           Это возможности R3F
        </Text>
        </Float>


        {/* <CustomObject /> */}
    
    </>
}