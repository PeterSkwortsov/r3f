import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Hamburger(props) {
    const { nodes, materials } = useGLTF('/burger.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Объект001.geometry}
                material={materials.Булочка}
                position={[0, 4.734, 0]}
                rotation={[3.14, -0.003, 3.129]}
                scale={-1.231}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Объект002.geometry}
                material={materials.Мясо}
                position={[0, 6.331, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={-1.231}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Плоскость.geometry}
                material={materials.Сыр}
                position={[-0.033, 2.585, 0.01]}
                scale={[2.63, 2.53, 2.53]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Цилиндр.geometry}
                material={materials.Салат}
                position={[0.049, 2.493, 0.008]}
                scale={[3.057, 0.12, 3.057]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Объект003.geometry}
                material={materials['Булочка.001']}
                position={[-1, 0, 0]}
                rotation={[-0.006, -0.003, 3.129]}
                scale={-1.231}
               
            />
        </group>
    )
}

useGLTF.preload('/burger.glb')