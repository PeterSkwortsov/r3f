import { useGLTF, useAnimations } from '@react-three/drei'
import { useControls } from 'leva'
import { useEffect } from 'react'
export default function Fox() 
{
    const fox = useGLTF('./Fox/glTF/Fox.gltf')
    const animations = useAnimations(fox.animations, fox.scene)
    console.log(animations)

    const {animationName} = useControls(
        {
            animationName: {
                options: animations.names,
            }
        }
    )

    useEffect(() => 
    {
        const actions = animations.actions[animationName]
        actions
        .reset()
        .fadeIn(0.5)
        .play()

       return () => {
           actions.fadeOut(0.5)
       }
    }, [animationName])

    return <primitive 
    object={fox.scene} 
    scale={0.05}
    position={[-5, -1.5, 2.5]}
    rotation-y={0.3}
        castShadow
    />
}