import { use, useRef } from "react"
import { OrbitControls, TransformControls, Html, Text, Float, MeshReflectorMaterial } from '@react-three/drei'
import Cube from "./Cube"
import { useControls, button} from "leva"
import { Perf } from "r3f-perf"


export default function Experience() {

    const {perfVisable} = useControls('perf', {perfVisable: true})

    const { position, color, visible } = useControls('sphery', {
        position: {
            value: {x: 1, y: 2},
            step: 0.01,
            joystick: 'invertY'
        },
        color: '#50c442',
        visible: true,
        clickMe: button(() => {
            console.log('click')
        }),
        choise: { options: ['A', 'B', 'C'] }
    })

    const cubeRef = useRef()
    const groupRef = useRef()
    const spherepRef = useRef()
    const planepRef = useRef()

    const {scale} = useControls('cube', {
        scale: {
            value: 1.5,
            step: 0.01,
            min: 0,
            max: 5

        }
    })

    return <>
        {perfVisable ? <Perf position="top-left"/> : null}

    <OrbitControls makeDefault/>

    <directionalLight position={[1,2,3]} intensity={1.5}/>
    <ambientLight intensity={0.5}/>

    <group ref={groupRef}>

    <mesh 
    ref={cubeRef} 
    position={[position.x, position.y, 0]}
                scale={scale}
                visible={visible}
            >
                <boxGeometry 
            />
                <meshStandardMaterial color={color}
            wireframe={false}
            />
        </mesh>
           

    <Cube scale={2}/>

        
            
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
                        occlude={[cubeRef, spherepRef]}

            >Это сфера 👈</Html>
            </mesh>
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