

export default function Cube({ scale = 1}) {

    return <mesh position={[5, 0.3, 1]} scale={scale} castShadow>
        <boxGeometry />
        <meshStandardMaterial color="green"
            wireframe={false}
        />
    </mesh>
}