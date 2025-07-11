import { useGLTF, MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function Model() 
{
    const model = useGLTF('/datsun-transformed.glb');
  
    return <>
    
        <primitive object={model.scene} scale={1} position-y={-1} />
        <mesh rotation-x={-Math.PI / 2}
            position={[0, -1.53, 0]}
            scale={28.5}>
            <planeGeometry position={[0, -0.2, 0]}  />
            {/* <meshStandardMaterial
                wireframe={false}
                color='greenyellow'
            /> */}

            <MeshReflectorMaterial
                resolution={512}
                blur={[1000, 1000]}
                mixBlur={1}
                mirror={0.7}
                color='orange'
                side={THREE.DoubleSide}
                
            />
        </mesh>
    
    </>
}