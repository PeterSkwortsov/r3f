import { useGLTF } from "@react-three/drei";

export default function Model() 
{
    const model = useGLTF('/burger.glb');
  
    return <>
    
        <primitive object={model.scene} scale={0.45} position-y={-1} />

    
    </>
}