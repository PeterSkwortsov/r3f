import { useRef } from "react"
import { OrbitControls, TransformControls } from '@react-three/drei'

export default function Experience() {

    const cubeRef = useRef()
    const groupRef = useRef()

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
            <TransformControls object={cubeRef}/>


        <mesh  position={[-3,-0.5,-3]} scale={1.5}>
            <sphereGeometry position={[0, -2, 0]} />
                <meshStandardMaterial
                wireframe={false}
                color='orange'
            />
        </mesh>
        </group>

        <mesh rotation-x={-Math.PI / 2} position={[0, -2, 0]} scale={18.5}>
            <planeGeometry position={[0, -2, 0]} />
            <meshStandardMaterial
                wireframe={false}
                color='greenyellow'
            />
        </mesh>

        {/* <CustomObject /> */}

    
    </>
}