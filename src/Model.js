import { useGLTF, MeshReflectorMaterial, Clone } from "@react-three/drei";
import * as THREE from "three";

export default function Model() 
{
    const model = useGLTF('/burger.glb');
  
    return <>
    
        {/* <Clone object={model.scene} scale={1} position-x={-4} position-y={-1} /> */}
        <Clone object={model.scene} scale={0.5} position-x={0} position-y={-2}/>
      
        
        
        
        
        
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