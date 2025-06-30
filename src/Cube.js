

export default function Cube({ scale = 1}) {

    return <mesh position={[5, 2, 1]} scale={scale}>
        <boxGeometry />
        <meshStandardMaterial color="red"
            wireframe={false}
        />
    </mesh>
}